import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';

const NoMatch = function () {
  return (
    <div style={{ height: '100vh' }} className="container d-flex align-items-center justify-content-center">
      <div className="me-4">
        <img src={logo} alt="Logo" width="100px" />
      </div>
      <div>
        <h1 className="text-danger fw-bold">404</h1>
        <h5>Page not found</h5>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default NoMatch;
