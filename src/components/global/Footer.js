import React from 'react';
import '../../styles/Footer.css';
import logo from '../../logo.svg';

const Footer = function () {
  return (
    <footer>
      <div className="container">
        <div className="row d-flex justify-content-between ms-5">
          <FooterColumn />
          <FooterColumn />
          <FooterColumn />
          <FooterColumn />
          <FooterColumn />
        </div>
        <div className="copyright mt-5 d-flex justify-content-between align-items-center">
          <div className="div d-flex align-items-center">
            <img src={logo} alt="Logo" width="50px" />
            <h5 className="ms-3">Classified</h5>
          </div>
          <div className="div">
            <span>&copy; Classified 2021 - All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = function () {
  return (
    <div className="col-lg-2">
      <span className="heading">Company</span>
      <br />
      <span className="item">About Us</span>
      <br />
      <span className="item">About Us</span>
      <br />
      <span className="item">About Us</span>
      <br />
      <span className="item">About Us</span>
      <br />
      <span className="item">About Us</span>
    </div>
  );
};

export default Footer;
