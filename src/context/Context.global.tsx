import React, { createContext, useContext, ReactNode } from 'react';
import { CharacterProps } from './../types/character';

interface ContextsType {
  favoritePeople: CharacterProps[];
  updatePeople: (newValue: CharacterProps[]) => void;
}

const GlobalContext = createContext<ContextsType | undefined>(undefined);

export const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favoritePeople, setFavoritePeople] = React.useState<CharacterProps[]>([]); 
  const updatePeople = (newValue: CharacterProps[]) => {
    setFavoritePeople(newValue);
  };

  return (
    <GlobalContext.Provider value={{ favoritePeople, updatePeople }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
};