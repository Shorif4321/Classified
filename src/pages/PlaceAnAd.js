import React from 'react';
import SelectCategory from '../components/place_ad/SelectCategory';
import Navbar from '../components/global/NavbarSimple';
import '../styles/PlaceAnAd.css';

const PlaceAnAd = function () {
  document.title = 'Place an Ad - Classified';
  return (
    <div className="place-an-ad">
      <Navbar />
      <main className="container mt-4">
        <SelectCategory />
      </main>
    </div>
  );
};

export default PlaceAnAd;
