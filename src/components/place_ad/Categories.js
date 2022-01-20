/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { AiOutlineMobile } from 'react-icons/ai';
import { BiBed } from 'react-icons/bi';
import { FaDog } from 'react-icons/fa';

const Categories = function ({ selectedCategory, setSelectedCategory }) {
  return (
    <>
      <Category selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} cat="mobiles" title="Mobile">
        <AiOutlineMobile />
      </Category>
      <Category selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} cat="motors" title="Motors">
        <img src="https://dbzstatic-a.akamaihd.net/images/paa/category-selection/icon-motors.svg" alt="Icon" />
      </Category>
      <Category selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} cat="pfs" title="Property For Sale">
        <img src="https://dbzstatic-a.akamaihd.net/images/paa/category-selection/icon-p4s.svg" alt="Icon" />
      </Category>
      <Category selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} cat="pfr" title="Property For Rent">
        <img src="https://dbzstatic-a.akamaihd.net/images/paa/category-selection/icon-p4r.svg" alt="Icon" />
      </Category>
      <Category selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} cat="community" title="Community">
        <img src="https://dbzstatic-a.akamaihd.net/images/paa/category-selection/icon-community.svg" alt="Icon" />
      </Category>
      <Category selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} cat="jobs" title="Jobs">
        <img src="https://dbzstatic-a.akamaihd.net/images/paa/category-selection/icon-jobs.svg" alt="Icon" />
      </Category>
      <Category selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} cat="animals" title="Animals">
        <FaDog />
      </Category>
      <Category selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} cat="furniture" title="Furniture">
        <BiBed />
      </Category>
    </>
  );
};

const Category = function ({
  selectedCategory, setSelectedCategory, title, children, cat, className = '', ...rest
}) {
  return (
    <div className={`col-${selectedCategory !== null ? '3' : '2'}`}>
      <div role="button" onClick={() => setSelectedCategory(cat)} className={`category d-flex align-items-center flex-column ${className}`} {...rest}>
        {children}
        <h6 className="category-title mt-auto">{title}</h6>
      </div>
    </div>
  );
};

export default Categories;
