import React from 'react';
import '../../styles/Categories.css';
import Category from './Category';

const Categories = function () {
  return (
    <section className="categories">
      <div className="container">
        <h3>Popular Categories</h3>
        <div className="row d-flex justify-content-between">
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
        </div>
      </div>
    </section>
  );
};

export default Categories;
