import React from 'react';
import Featured from './Featured';
import SaleLocations from './SaleLocations';
import Hero from './Hero';
import FooterLinks from '../../global/FooterLinks';

const PropertyForSale = function ({ setType }) {
  const [currentCity, setCurrentCity] = React.useState('');

  return (
    <>
      <Hero setType={setType} currentCity={currentCity} setCurrentCity={setCurrentCity} />
      {currentCity !== '' ? <SaleLocations city={currentCity} /> : <SaleLocations />}
      <Featured />
      <FooterLinks type="sell" />
    </>
  );
};

export default PropertyForSale;
