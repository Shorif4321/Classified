import React from 'react';
import ItemCard from './ItemCard';

const CardGroup = function () {
  return (
    <div>
      <h3>Lorem ipsum dolor sit.</h3>
      <div className="items mt-3 d-flex justify-content-between">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </div>
  );
};

export default CardGroup;
