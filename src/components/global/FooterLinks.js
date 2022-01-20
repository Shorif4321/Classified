import React from 'react';
import { Link } from 'react-router-dom';

const cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar', 'Hyderabad', 'Rawalpindi', 'Multan', 'Sukkur', 'Sialkot', 'Bahawalpur', 'Jhang', 'Faisalabad', 'Gujranwala', 'Sargodha'];

const FooterLinks = function ({ type }) {
  return (
    <div className="footer-link bg-light pt-2">
      <div className="container">
        <h4>Useful Links</h4>
        <div className="row">
          <LinkColumn type={type} />
          <LinkColumn type={type} />
          <LinkColumn type={type} />
          <LinkColumn type={type} />
        </div>
      </div>
    </div>
  );
};

const LinkColumn = function ({ type }) {
  return (
    <div className="col-md-3 col-sm-6">
      <h5>
        Apartments for
        {' '}
        {type}
      </h5>
      <ul className="list-unstyled">
        {cities.map((city) => (
          <li key={Math.random()}>
            <Link className="text-black" to={`/property/${city}`}>{city}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
