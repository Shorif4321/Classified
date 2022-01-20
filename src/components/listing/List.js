import React from 'react';
import Attributes from '../global/Attributes';
import ListItem from './ListItem';

const List = function ({ category, subCategory }) {
  return (
    <div className="list">
      <div className="header mb-4">
        <div className="d-flex justify-content-between">
          <h4>
            Buy and sell
            {' '}
            {subCategory}
            {' '}
            in Karachi, Pakistan
          </h4>
          <select className="border rounded p-1">
            <option>Sort by</option>
            <option>Sort by</option>
            <option>Sort by</option>
            <option>Sort by</option>
            <option>Sort by</option>
          </select>
        </div>
        <h6 className="text-muted mb-4">Total 43 ads found</h6>
      </div>
      <Attributes category={category} subCategory={subCategory} />
      <div className="list-items">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </div>
  );
};

export default List;
