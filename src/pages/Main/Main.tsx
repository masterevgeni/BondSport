import React from 'react';
import PeopleList from '../../components/PeopleList/PeopleList';
import Favorites from '../../components/Favorites/Favorites';
import './Main.css';

const Main: React.FC = () => {
  return (
    <div className="split-screen">
      <div className="left-side">
        <PeopleList/>
      </div>
      <div className="right-side">
        <Favorites />
      </div>
    </div>
  );
};

export default Main;
