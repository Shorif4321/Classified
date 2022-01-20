import React from 'react';
import NavDropdown from '../components/global/NavDropdown';
import Navbar from '../components/global/Navbar';
import Hero from '../components/Homepage/Hero';
import Categories from '../components/Homepage/Categories';
import TopItems from '../components/Homepage/TopItems';
import Footer from '../components/global/Footer';

const Homepage = function () {
  document.title = 'Homepage - Classified';
  return (
    <>
      <Navbar />
      <NavDropdown />
      <main>
        <Hero />
        <Categories />
        <TopItems />
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
