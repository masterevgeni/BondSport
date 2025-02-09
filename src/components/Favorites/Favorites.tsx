import React from 'react';
import { CharacterProps } from '../../types/character';
import { useGlobalContext } from '../../context/Context.global';
import ViewCard from '../ViewCard/ViewCard';
import './Favorites.css';

const PlanetList: React.FC = () => {
    const { favoritePeople } = useGlobalContext();

    const changeBackground = () => {
        document.body.setAttribute('style', 'background-color: #27b !important;');
    }

    return (
        <>
            <div className='header'>
                <h2>Favorites</h2>
                <button onClick={() => changeBackground()}>Change Background</button>
            </div>
            <div className="container">
                {favoritePeople.map((person: CharacterProps, index: number) => (
                    <ViewCard character={person} index={index} key={index} />
                ))}
            </div>
        </>
    );
};

export default PlanetList;
