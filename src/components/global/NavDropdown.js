/* eslint-disable jsx-a11y/mouse-events-have-key-events */
// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/NavDropdown.css';
import { FaCar } from 'react-icons/fa';

const NavDropdown = function () {
  return (
    <div className="nav-dropdown">
      <div className="container">
        <ul className="nav-dpdn-list d-flex align-items-center justify-content-between me-4">
          <DropdownItem href="/motors" title="Motors" />
          <DropdownItem href="/property?type=sale" title="Property for Sale" />
          <DropdownItem href="/property?type=rent" title="Property for Rent" />
          <DropdownItem href="/classified" title="Classifieds" />
          <DropdownItem href="/mobiles" title="Mobiles and Tablets" />
          <DropdownItem href="/jobs" title="Jobs" />
          <DropdownItem href="/community" title="Community" />
        </ul>
      </div>
    </div>
  );
};

const DropdownItem = function ({ href, title }) {
  const [show, setShow] = React.useState(false);

  const menuStyle = {
    display: show ? 'block' : 'none',
    position: 'absolute',
    top: '50px',
    left: 0,
    zIndex: '999',
    background: '#fff',
    borderRadius: '5px',
    padding: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  };

  const shadowStyle = {
    backgroundColor: '#000000a0', zIndex: 500, height: '100vh', width: '100vw', overflow: 'hidden', display: show ? 'block' : 'none', position: 'fixed', top: '110px', left: 0,
  };

  return (
    <>
      <li onMouseOver={() => setShow(true)} onMouseOut={() => setShow(false)} className="nav-dpdn-item">
        <Link to={href}>{title}</Link>
        <div style={menuStyle} className="menu">
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
        </div>
      </li>
      <div style={shadowStyle} />
    </>
  );
};

const MenuItem = function () {
  return (
    <Link to="/motors/used-cars">
      <div className="d-flex align-items-center px-3 border-top py-2">
        <FaCar />
        <span className="ms-2">Used Cars</span>
      </div>
    </Link>
  );
};

export default NavDropdown;
