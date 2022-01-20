import React from 'react';
import StatisticsBox from '../util/StatisticsBox';
import '../../styles/Statistics.css';

const Statistics = function () {
  return (
    <section className="statistics my-4">
      <div className="row">
        <StatisticsBox text="Bedroom" value="2" />
        <StatisticsBox text="Motorcycles" value="34" />
        <StatisticsBox text="Motorcycles" value="34" />
        <StatisticsBox text="Motorcycles" value="34" />
      </div>
    </section>
  );
};

export default Statistics;
