import React from 'react';
import Statistics from '../components/jobs/Statistics';
import Hero from '../components/jobs/Hero';
import Footer from '../components/global/Footer';
import Navbar from '../components/global/Navbar';
import NavDropdown from '../components/global/NavDropdown';
import Featured from '../components/jobs/Featured';

const Jobs = function () {
  document.title = 'Jobs - Classified';
  return (
    <>
      <Navbar />
      <NavDropdown />
      <main className="jobs mb-4">
        <Hero />
        <Statistics />
        <Featured />
      </main>
      <Footer />
    </>
  );
};

export default Jobs;
