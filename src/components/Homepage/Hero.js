import React from 'react';
import '../../styles/Hero.css';
import HeroSearchBox from './HeroSearchBox';

const Hero = function () {
  return (
    <div className="container">
      <section className="hero">
        <h4 className="text-white fw-normal text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora solut.</h4>
        <HeroSearchBox />
      </section>
    </div>
  );
};

export default Hero;
