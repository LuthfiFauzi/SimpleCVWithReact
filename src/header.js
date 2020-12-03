import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const listName = [
    'home',
    'experience',
    'education',
    'achievement',
    'contact',
<<<<<<< Updated upstream:src/header.js
=======
    'infoCorona',
    'loginProfile',
>>>>>>> Stashed changes:src/components/headerPage/index.js
  ];
  const [isActive, setIsActive] = useState('home');

  return (
    <div className="header">
      {listName.map((name) => {
        return (
          <Link to={`/${name}`} key={name}>
            <div className="menu">{name}</div>
          </Link>
        );
      })}
    </div>
  );
};
export default Header;
