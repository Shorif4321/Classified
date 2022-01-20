import React from 'react';
import { BiCalendarEvent } from 'react-icons/bi';

const Amenities = function () {
  return (
    <div className="amenities" id="amenities">
      <h5>Amenities</h5>
      <AmenitySection />
      <AmenitySection />
      <AmenitySection />
      <AmenitySection />
    </div>
  );
};

const AmenitySection = function () {
  return (
    <div className="row border-bottom d-flex justify-content-between">
      <div className="col-2 border-end d-flex align-items-center">
        <h6>Main Features</h6>
      </div>
      <div className="col-3">
        <Amenity />
        <Amenity />
        <Amenity />
        <Amenity />
        <Amenity />
      </div>
      <div className="col-3">
        <Amenity />
        <Amenity />
        <Amenity />
        <Amenity />
        <Amenity />
      </div>
      <div className="col-3">
        <Amenity />
        <Amenity />
        <Amenity />
        <Amenity />
        <Amenity />
      </div>
    </div>
  );
};

const Amenity = function () {
  return (
    <span className="d-block my-2">
      <BiCalendarEvent style={{ fontSize: '30px' }} className="me-2" />
      {' '}
      <small>Built in 2020</small>
    </span>
  );
};

export default Amenities;
