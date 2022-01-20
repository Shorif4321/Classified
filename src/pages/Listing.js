// @ts-nocheck
import React from 'react';
import { useParams } from 'react-router-dom';
import Pagination from '../components/util/Pagination';
import List from '../components/listing/List';
import Sidebar from '../components/listing/Sidebar';
import Footer from '../components/global/Footer';
import Navbar from '../components/global/Navbar';
import NavDropdown from '../components/global/NavDropdown';

const Listing = function () {
  document.title = 'Motors Listing - Classified';
  const { category, subCategory } = useParams();
  return (
    <>
      <Navbar />
      <NavDropdown />
      <main className="listing mb-4">
        <div className="container">
          <div className="row">
            <div className="col-2">
              <Sidebar category={category} subCategory={subCategory} />
            </div>
            <div className="col-8">
              <List category={category} subCategory={subCategory} />
            </div>
            <div className="col-2">
              Ads Here
            </div>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <Pagination />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Listing;
