import React from 'react';
import NavDropdown from '../components/global/NavDropdown';
import Navbar from '../components/global/Navbar';
import Footer from '../components/global/Footer';
import Hero from '../components/motors/Hero';
import Statistics from '../components/motors/Statistics';
import UsedCarsMenu from '../components/motors/UsedCarsMenu';
import Featured from '../components/motors/Featured';
import Testimonials from '../components/motors/Testimonials';
import NewCarsMenu from '../components/motors/NewCarsMenu';

const Motors = function () {
  document.title = 'Motors - Classified';
  return (
    <>
      <Navbar />
      <NavDropdown />
      <main className="pt-4">
        <Hero />
        <Statistics />
        <UsedCarsMenu />
        <NewCarsMenu />
        <Featured />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
};

export default Motors;
