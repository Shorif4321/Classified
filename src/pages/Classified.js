import React from 'react';
import Statistics from '../components/classified/Statistics';
import Hero from '../components/classified/Hero';
import Footer from '../components/global/Footer';
import Navbar from '../components/global/Navbar';
import NavDropdown from '../components/global/NavDropdown';
import Featured from '../components/classified/Featured';

const Classified = function () {
  document.title = 'Classified Ads - Classified';
  return (
    <>
      <Navbar />
      <NavDropdown />
      <main className="classified mb-4">
        <Hero />
        <Statistics />
        <Featured />
      </main>
      <Footer />
    </>
  );
};

export default Classified;
