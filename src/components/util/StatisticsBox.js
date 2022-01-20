import React from 'react';

const StatisticsBox = function ({ text, value }) {
  return (
    <div className="col-3">
      <div className="statistics-box text-center">
        <small className="text-secondary text-uppercase">{text}</small>
        <h5>{value}</h5>
      </div>
    </div>
  );
};

export default StatisticsBox;
