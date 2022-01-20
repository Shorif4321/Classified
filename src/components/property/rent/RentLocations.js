import React from 'react';
import Button from '../../util/Button';
import '../../../styles/SaleLocations.css';

const SaleLocations = function ({ city = 'Pakistan' }) {
  const [isOpen, setIsOpen] = React.useState(true);
  return (
    <div className="container">
      <section className="sale-locations mt-5">
        <div className={`d-flex align-items-center justify-content-between ${isOpen && 'mb-2'}`}>
          <h5>
            Locations of Property For Rent in
            {' '}
            {city}
          </h5>
          <Button onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Hide' : 'Show'}</Button>
        </div>
        {isOpen && (
          <div className="toggle">
            <hr />
            <div className="row mt-3">
              <Locations />
              <Locations />
              <Locations />
              <Locations />
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

const Locations = function () {
  return (
    <div className="col-3">
      <p className="location">lorem</p>
      <p className="location">lorem</p>
      <p className="location">lorem</p>
      <p className="location">lorem</p>
      <p className="location">lorem</p>
      <p className="location">lorem</p>
      <p className="location">lorem</p>
      <p className="location">lorem</p>
      <p className="location">lorem</p>
      <p className="location">lorem</p>
      <p className="location">lorem</p>
      <p className="location">lorem</p>
      <p className="location">lorem</p>
      <p className="location">lorem</p>
      <p className="location">lorem</p>
      <p className="location">lorem</p>
      <p className="location">lorem</p>
      <p className="location">lorem</p>
      <p className="location">lorem</p>
      <p className="location">lorem</p>
    </div>
  );
};

export default SaleLocations;
