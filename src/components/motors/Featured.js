import React from 'react';
import ItemCard from '../Homepage/ItemCard';

const Featured = function () {
  return (
    <section className="featured mt-3">
      <div className="container">
        <h3>Featured Listings</h3>
        <div className="items mt-3 d-flex justify-content-between">
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </div>
    </section>
  );
};

export default Featured;
