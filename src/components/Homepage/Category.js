import React from 'react';
import { BiCar } from 'react-icons/bi';
import { AiOutlineArrowRight } from 'react-icons/ai';
import '../../styles/Categories.css';
import { Link } from 'react-router-dom';

const Category = function () {
  return (
    <div className="category col-12 col-sm-6 col-md-4 col-lg-2 mx-2">
      <span className="fw-normal">
        <BiCar />
        <span className="ms-2 fw-normal">Motors</span>
        <small className="text-secondary ms-2">(19192)</small>
      </span>
      <div className="content">
        <ul>
          <li><Link style={{ color: 'unset' }} to="/motors/details/productID=cfewrg45y4er">Lorem, ipsum dolor.</Link></li>
          <li><Link style={{ color: 'unset' }} to="/motors/details/productID=cfewrg45y4er">Lorem, ipsum dolor.</Link></li>
          <li><Link style={{ color: 'unset' }} to="/motors/details/productID=cfewrg45y4er">Lorem, ipsum dolor.</Link></li>
          <li><Link style={{ color: 'unset' }} to="/motors/details/productID=cfewrg45y4er">Lorem, ipsum dolor.</Link></li>
          <li className="text-red">
            All in Motors
            {' '}
            <AiOutlineArrowRight />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Category;
