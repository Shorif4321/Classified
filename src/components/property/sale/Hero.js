import React from 'react';
import Button from '../../util/Button';
import '../../../styles/Hero.css';
import HeroFilter from './HeroFilter';

const Hero = function ({ setType, currentCity, setCurrentCity }) {
  return (
    <div className="container">
      <section className="hero property-hero for-sale text-center text-white">
        <h3>Buy property with Classified</h3>
        <ToggleButton setType={setType} />
        <HeroFilter currentCity={currentCity} setCurrentCity={setCurrentCity} />
      </section>
    </div>
  );
};

const ToggleButton = function ({ setType }) {
  return (
    <div className="toggle-buttons">
      <Button className="toggle-button active">Sale</Button>
      <Button onClick={() => setType('rent')} className="toggle-button">Rent</Button>
    </div>
  );
};

export default Hero;
