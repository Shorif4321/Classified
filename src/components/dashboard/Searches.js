// @ts-nocheck
import React from 'react';
import Pagination from '../util/Pagination';
import Block from './Block';

const Searches = function () {
  return (
    <section className="ad">
      <h5>Searches you&apos;ve performed</h5>
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

export default Searches;
