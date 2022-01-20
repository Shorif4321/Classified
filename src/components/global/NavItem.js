import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/NavItem.css';

const NavItem = function ({ children, text, path = '/' }) {
  return (
    <Link to={path}>
      <div className="nitem text-secondary text-center mx-2">
        {children}
        <small>{text}</small>
      </div>
    </Link>
  );
};

export default NavItem;
