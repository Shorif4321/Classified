import React from 'react';
import Featured from './Featured';
import RentLocations from './RentLocations';
import Hero from './Hero';
import FooterLinks from '../../global/FooterLinks';

const PropertyForRent = function ({ setType }) {
  const [currentCity, setCurrentCity] = React.useState('');

  return (
    <>
      <Hero setType={setType} currentCity={currentCity} setCurrentCity={setCurrentCity} />
      {currentCity !== '' ? <RentLocations city={currentCity} /> : <RentLocations />}
      <Featured />
      <FooterLinks type="rent" />
    </>
  );
};

export default PropertyForRent;
