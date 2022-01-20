import React from 'react';
import { BsArrowBarLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Button from '../util/Button';
import logo from '../../logo.svg';

const Navbar = function ({ back = false }) {
  return back ? (
    <nav className="d-flex align-items-center border-bottom">
      <div className="container">
        <div className="mx-auto w-100 d-flex justify-content-between align-items-center my-2">
          <Link to="/place-an-ad">
            <Button className="bg-transparent" style={{ cursor: 'pointer' }}>
              <BsArrowBarLeft className="text-danger" style={{ fontSize: '20px' }} />
            </Button>
          </Link>
          <div className="align-items-center d-flex">
            <Link to="/" className="d-flex text-black align-items-center">
              <img src={logo} alt="logo" width="40px" />
              <h4 className="ms-2 mb-0 fw-normal">Classified</h4>
            </Link>
          </div>
          <div style={{ width: '6%' }} />
        </div>
      </div>
    </nav>
  ) : (
    <nav className="d-flex align-items-center border-bottom">
      <Link className="mx-auto my-2 text-black" to="/">
        <div className="align-items-center d-flex">
          <img src={logo} alt="logo" width="40px" />
          <h4 className="ms-2 fw-normal">Classified</h4>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
