import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const listMenu = [
    'home',
    'experience',
    'education',
    'achievement',
    'contact',
  ];
  return (
    <div className="header">
      {listMenu.map((name) => {
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
