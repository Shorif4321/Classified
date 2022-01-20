import React from 'react';
import Button from '../util/Button';
import dummy from '../../assets/images/dummy_item.jpg';

const Block = function () {
  return (
    <div className="dash-blocks d-flex align-items-center justify-content-between m-2 p-3 rounded shadow-sm">
      <div className="info d-flex">
        <img src={dummy} alt="Dummy" width="50px" />
        <div className="texts ms-3">
          <h5 className="m-0">Dummy</h5>
          <small>Lorem ipsum dolor sit amet consectetur adipisicing elit...</small>
        </div>
      </div>
      <Button>Delete</Button>
    </div>
  );
};

export default Block;
