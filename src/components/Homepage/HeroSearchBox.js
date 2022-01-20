/* eslint-disable no-nested-ternary */
import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import Button from '../util/Button';
import '../../styles/HeroSearchBox.css';
import Dropdown from '../util/Dropdown';

const HeroSearchBox = function () {
  const [currentProvince, setCurrentProvince] = React.useState('');
  const [currentCity, setCurrentCity] = React.useState('');
  const [currentArea, setCurrentArea] = React.useState('');
  const [activeFilter, setActiveFilter] = React.useState('all');
  const cities = ['Jammu and Kashmir', 'Balochistan', 'Gilgit-Baltistan', 'Islamabad', 'Khyber Pakhtunkhwa', 'Punjab', 'Sindh'];

  return (
    <div className="hero-sb">
      <div className="filter-container d-flex align-items-center justify-content-between">
        <div className="title">
          <h5 className="text-nowrap">Searching in</h5>
        </div>
        <div className="hero-filters">
          <button onClick={(e) => setActiveFilter('all')} className={`filter ${activeFilter === 'all' && 'active'}`} type="button">All</button>
          <button onClick={(e) => setActiveFilter('motors')} className={`filter ${activeFilter === 'motors' && 'active'}`} type="button">Motors</button>
          <button onClick={(e) => setActiveFilter('classifieds')} className={`filter ${activeFilter === 'classifieds' && 'active'}`} type="button">Classifieds</button>
          <button onClick={(e) => setActiveFilter('rent')} className={`filter ${activeFilter === 'rent' && 'active'}`} type="button">Property for Rent</button>
          <button onClick={(e) => setActiveFilter('sale')} className={`filter ${activeFilter === 'sale' && 'active'}`} type="button">Property for Sale</button>
          <button onClick={(e) => setActiveFilter('jobs')} className={`filter ${activeFilter === 'jobs' && 'active'}`} type="button">Jobs</button>
          <button onClick={(e) => setActiveFilter('community')} className={`filter ${activeFilter === 'community' && 'active'}`} type="button">Community</button>
        </div>
      </div>
      <div className="search-box d-flex align-items-center justify-content-between my-3">
        {currentProvince === '' ? (
          <Dropdown fw="Select Province" style={{ width: '40%' }} value={currentProvince} setValue={setCurrentProvince} label="Select Province" options={cities} />
        ) : currentCity === '' ? (
          <Dropdown fw="Select City" style={{ width: '40%' }} value={currentCity} setValue={setCurrentCity} label={currentProvince} options={cities} />
        ) : (
          <Dropdown fw="Select Area" style={{ width: '40%' }} value={currentArea} setValue={setCurrentArea} label={`${currentProvince} > ${currentCity}`} options={cities} />
        )}
        <input placeholder="Search for anything" className="form-control py-3" type="text" />
        <Button className="py-3 px-5 ms-2">Search</Button>
      </div>
    </div>
  );
};

export default HeroSearchBox;
