import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = function () {
  const linkStyle = {
    padding: '1px 10px', backgroundColor: '#0000ff25', margin: '0 10px', borderRadius: '25px', fontSize: '12px',
  };
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div style={{ fontSize: '14px' }} className="d-flex align-items-center">
          <Link className="mx-1 fw-bold text-primary" style={linkStyle} to="/">CLASSIFIED&trade;</Link>
          <span>&gt;</span>
          <Link className="mx-1 fw-bold text-primary" style={linkStyle} to="/">PAKISTAN</Link>
          <span>&gt;</span>
          <Link className="mx-1 fw-bold text-primary" style={linkStyle} to="/motors">MOTORS</Link>
          <span>&gt;</span>
          <Link className="mx-1 fw-bold text-primary" style={linkStyle} to="/motors/cars">CARS</Link>
          <span>&gt;</span>
          <span className="mx-1 fw-bold">Tesla Model X</span>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Breadcrumb;
