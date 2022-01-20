// @ts-nocheck
import React from 'react';
import Pagination from '../util/Pagination';
import Block from './Block';

const Ads = function () {
  return (
    <section className="ad">
      <h5>Ads you&apos;ve posted</h5>
      <div className="ad-list">
        <Block />
        <Block />
        <Block />
        <Block />
      </div>
      <div className="pagination d-flex justify-content-center mt-4">
        <Pagination />
      </div>
    </section>
  );
};

export default Ads;
