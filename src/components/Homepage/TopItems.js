import React from 'react';
import CardGroup from './CardGroup';

const TopItems = function () {
  return (
    <section className="top-items mt-5">
      <div className="container">
        <CardGroup />
        <CardGroup />
        <CardGroup />
        <CardGroup />
        <CardGroup />
        <CardGroup />
        <CardGroup />
      </div>
    </section>
  );
};

export default TopItems;
