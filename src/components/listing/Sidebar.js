/* eslint-disable react/no-array-index-key */
import React from 'react';
import { BiBell } from 'react-icons/bi';
import Button from '../util/Button';
import '../../styles/Sidebar.css';

const Sidebar = function ({ category, subCategory }) {
  return (
    <div className="sidebar">
      <div className="header d-flex align-items-center justify-content-between">
        <h6 className="m-0">Search</h6>
        <button type="button" className="save border rounded bg-transparent text-secondary">
          <BiBell />
          {' '}
          Save Search
        </button>
      </div>
      <hr />
      <div className="filters">
        <SimpleSelect fw="Karachi" options={['Lahore', 'Lahore', 'Lahore', 'Lahore']} />
        <SimpleSelect fw={category.charAt(0).toUpperCase() + category.slice(1)} options={['Motors', 'Property', 'Classified', 'Lahore']} />
        <SimpleSelect fw={subCategory.charAt(0).toUpperCase() + subCategory.slice(1)} options={['Motors', 'Property', 'Classified', 'Lahore']} />
        <SimpleSelect fw="No Filter" options={['Motors', 'Property', 'Classified', 'Lahore']} />
        <h6 className="mt-2 mb-0">Price Range</h6>
        <div className="d-flex align-items-center justify-content-between my-2">
          <input className="border rounded w-50 me-1" placeholder="Min" />
          <input className="border rounded w-50" placeholder="Max" />
        </div>
        <h6 className="mt-3 mb-0">Content Language</h6>
        <div className="d-flex align-items-center my-2">
          <input type="checkbox" className="me-2 form-check-input shadow-none" />
          <small>Show English Only</small>
        </div>
        <h6 className="mt-3 mb-0">Photos</h6>
        <div className="d-flex align-items-center my-2">
          <input type="checkbox" className="me-2 form-check-input shadow-none" />
          <small>Show Ads with Photo only</small>
        </div>
        <input placeholder="Keywords" type="text" className="border rounded w-100 p-1 mt-2" />
        <Button className="w-100 mt-3">Search</Button>
      </div>
    </div>
  );
};

export const SimpleSelect = function ({
  options, fw, className = '', ...rest
}) {
  return (
    <select className={`border rounded w-100 my-1 py-1 ${className}`} {...rest}>
      <option>{fw}</option>
      {
        options.map((option, index) => (
          <option key={index}>{option}</option>
        ))
      }
    </select>
  );
};

export default Sidebar;
