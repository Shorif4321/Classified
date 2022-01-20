/* eslint-disable no-nested-ternary */
import React from 'react';
import {
  Tab, Tabs,
} from 'react-bootstrap';
import Button from '../../util/Button';
import '../../../styles/HeroFilter.css';
import Dropdown from '../../util/Dropdown';

const HeroFilter = function ({ currentCity, setCurrentCity }) {
  return (
    <div className="hero-filter">
      <Tabs defaultActiveKey="residential">
        <Tab eventKey="residential" title="Residential for Rent">
          <FilterInputs currentCity={currentCity} setCurrentCity={setCurrentCity} />
        </Tab>
        <Tab eventKey="commercial" title="Commercial for Rent">
          <FilterInputs currentCity={currentCity} setCurrentCity={setCurrentCity} />
        </Tab>
        <Tab eventKey="land" title="Land for Rent">
          <FilterInputs currentCity={currentCity} setCurrentCity={setCurrentCity} />
        </Tab>
        <Tab eventKey="multiple" title="Multiple Units for Rent">
          <FilterInputs currentCity={currentCity} setCurrentCity={setCurrentCity} />
        </Tab>
      </Tabs>
    </div>
  );
};

const FilterInputs = function ({ currentCity, setCurrentCity }) {
  const cities = ['Jammu and Kashmir', 'Balochistan', 'Gilgit-Baltistan', 'Islamabad', 'Khyber Pakhtunkhwa', 'Punjab', 'Sindh'];
  // generate a fake array
  const fakeArray = Array.from({ length: 10 }, (v, k) => k);
  const [currentProvince, setCurrentProvince] = React.useState('');
  return (
    <form className="d-flex align-items-center" onSubmit={(e) => e.preventDefault()}>
      <div style={{ width: '30%' }}>
        {currentProvince === '' ? (
          <Dropdown value={currentProvince} setValue={setCurrentProvince} label="Select Province" options={cities} />
        ) : (
          <Dropdown fw="Select City" value={currentCity} setValue={setCurrentCity} label={currentProvince} options={cities} />
        )}
      </div>
      <div className="me-2" style={{ width: '15%' }}>
        <small className="d-block text-start">Property Type</small>
        <Dropdown fw="All Types" options={fakeArray} />
      </div>
      <div className="me-2" style={{ width: '15%' }}>
        <small className="d-block text-start">Price Range</small>
        <Dropdown fw="All Price Ranges" options={fakeArray} />
      </div>
      <div className="me-2" style={{ width: '15%' }}>
        <small className="d-block text-start">Number of Bed</small>
        <Dropdown fw="All Quantities" options={fakeArray} />
      </div>
      <div className="me-2" style={{ width: '15%' }}>
        <small className="d-block text-start">Land Area</small>
        <Dropdown fw="All Areas" options={cities} />
      </div>
      <Button type="submit" className="py-3">Find</Button>
    </form>
  );
};

export default HeroFilter;
