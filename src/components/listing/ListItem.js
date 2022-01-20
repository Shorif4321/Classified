import React from 'react';
import { GoLocation } from 'react-icons/go';
import { BsHeart } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import {
  MdBathtub, MdBed, MdFlag, MdSquareFoot,
} from 'react-icons/md';
import Button from '../util/Button';
import laptop from '../../assets/images/dummy_item.jpg';
import '../../styles/ListItem.css';

const ListItem = function () {
  return (
    <div className="list-item row">
      <div className="col-4">
        <Link to="/motors/details?productID=91nd289hyd7823yd" style={{ color: 'unset' }}>
          <img src={laptop} alt="laptop" />
        </Link>
      </div>
      <div className="col-8">
        <div className="title d-flex align-items-center justify-content-between">
          <Link to="/motors/details?productID=91nd289hyd7823yd" style={{ color: 'unset' }}>
            <h6 className="m-0">Amazing 3BR+M | 24/7 Security | Compartment...</h6>
          </Link>
          <small className="bg-dark rounded-pill text-white px-2">Featured</small>
        </div>
        <br />
        <small>PKR</small>
        {' '}
        <h6 className="d-inline text-danger">1,000,000</h6>
        <br />
        <small className="text-muted">about 1 hours</small>
        <br />
        <div className="d-flex" style={{ marginBottom: '-25px' }}>
          <small>
            <MdBed />
            {' '}
            2 Beds
          </small>
          <small className="ms-3">
            <MdBathtub />
            {' '}
            2 Bath
          </small>
          <small className="ms-3">
            <MdSquareFoot />
            {' '}
            200 SQFT
          </small>
        </div>
        <br />
        <small>
          <GoLocation />
          {' '}
          Islamabad, Pakistan
        </small>
        <br />
        <div className="d-flex align-items-center justify-content-between">
          <Link to="/chat"><Button className="mt-2">Chat</Button></Link>
          <div className="icons">
            <button title="Add to favorite" type="button" className="icon">
              <BsHeart />
            </button>
            <button title="Add to favorite" type="button" className="icon ms-2">
              <MdFlag />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
