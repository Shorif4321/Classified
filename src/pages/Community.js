import React from 'react';
import Statistics from '../components/community/Statistics';
import Hero from '../components/community/Hero';
import Footer from '../components/global/Footer';
import Navbar from '../components/global/Navbar';
import NavDropdown from '../components/global/NavDropdown';
import Featured from '../components/community/Featured';

const Jobs = function () {
  document.title = 'Community - Classified';
  return (
    <>
      <Navbar />
      <NavDropdown />
      <main className="community mb-4">
        <Hero />
        <Statistics />
        <Featured />
      </main>
      <Footer />
    </>
  );
};

export default Jobs;
