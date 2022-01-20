import React from 'react';
import Breadcrumb from '../components/listing-details/Breadcrumb';
import useQuery from '../hooks/useQuery';
import Footer from '../components/global/Footer';
import Navbar from '../components/global/Navbar';
import NavDropdown from '../components/global/NavDropdown';
import Main from '../components/listing-details/Main';
import Sidebar from '../components/listing-details/Sidebar';
import CardGroup from '../components/Homepage/CardGroup';
import FooterLinks from '../components/global/FooterLinks';

const ListingDetails = function () {
  const query = useQuery();
  const pdID = query.get('productID');
  document.title = `Details | ${pdID} - Classified`;

  return (
    <>
      <Navbar />
      <NavDropdown />
      <main className="listing-details mb-4 container">
        <Breadcrumb />
        <div className="row mb-3">
          <div className="col-9">
            <Main />
          </div>
          <div className="col-3">
            <Sidebar />
          </div>
        </div>
        <CardGroup />
      </main>
      <FooterLinks type="sale" />
      <Footer />
    </>
  );
};

export default ListingDetails;
