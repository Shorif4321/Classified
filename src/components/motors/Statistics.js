import React from 'react';
import StatisticsBox from '../util/StatisticsBox';
import '../../styles/Statistics.css';

const Statistics = function () {
  return (
    <section className="statistics py-4 mt-2 bg-light">
      <div className="container">
        <div className="row">
          <StatisticsBox text="Used Cars" value="1425" />
          <StatisticsBox text="Motorcycles" value="34" />
          <StatisticsBox text="Motorcycles" value="34" />
          <StatisticsBox text="Motorcycles" value="34" />
          <StatisticsBox text="Motorcycles" value="34" />
          <StatisticsBox text="Motorcycles" value="34" />
        </div>
      </div>
    </section>
  );
};

export default Statistics;
