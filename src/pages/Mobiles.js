import React from 'react';
import Statistics from '../components/mobiles/Statistics';
import Hero from '../components/mobiles/Hero';
import Footer from '../components/global/Footer';
import Navbar from '../components/global/Navbar';
import NavDropdown from '../components/global/NavDropdown';
import Featured from '../components/mobiles/Featured';

const Mobiles = function () {
  document.title = 'Mobiles - Classified';
  return (
    <>
      <Navbar />
      <NavDropdown />
      <main className="mobiles mb-4">
        <Hero />
        <Statistics />
        <Featured />
      </main>
      <Footer />
    </>
  );
};

export default Mobiles;
