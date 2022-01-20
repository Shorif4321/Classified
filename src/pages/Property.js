import React, { useEffect } from 'react';
import useQuery from '../hooks/useQuery';
import PropertyForSale from '../components/property/sale/PropertyForSale';
import Footer from '../components/global/Footer';
import Navbar from '../components/global/Navbar';
import NavDropdown from '../components/global/NavDropdown';
import PropertyForRent from '../components/property/rent/PropertyForRent';

const Property = function () {
  document.title = 'Properties - Classified';

  const [type, setType] = React.useState('sale');

  const query = useQuery();
  useEffect(() => {
    if (query.get('type') === 'sale') {
      setType('sale');
    } else if (query.get('type') === 'rent') {
      setType('rent');
    }
  }, [query]);

  return (
    <>
      <Navbar />
      <NavDropdown />
      <main className="property py-3 pb-5">
        {
          type === 'sale'
            ? <PropertyForSale setType={setType} />
            : <PropertyForRent setType={setType} />
        }
      </main>
      <Footer />
    </>
  );
};

export default Property;
