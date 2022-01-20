import React from 'react';
import ItemCard from '../../Homepage/ItemCard';

const Featured = function () {
  return (
    <section className="featured bg-light my-4 py-2">
      <div className="container">
        <h3>Featured Properties</h3>
        <div className="row mt-3">
          <ItemCard noMargin size={3} />
          <ItemCard noMargin size={3} />
          <ItemCard noMargin size={3} />
          <ItemCard noMargin size={3} />
        </div>
      </div>
    </section>
  );
};

export default Featured;
