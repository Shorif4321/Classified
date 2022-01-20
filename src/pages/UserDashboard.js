import React, { useDebugValue, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useQuery from '../hooks/useQuery';
import Main from '../components/dashboard/Main';
import Footer from '../components/global/Footer';
import Navbar from '../components/global/Navbar';
import NavDropdown from '../components/global/NavDropdown';

const UserDashboard = function () {
  document.title = 'User Dashboard - Classified';

  const [currentTab, setCurrentTab] = React.useState('profile');

  const query = useQuery();

  useEffect(() => {
    if (query.get('tab')) {
      setCurrentTab(query.get('tab'));
    }
  }, [query]);

  return (
    <>
      <Navbar />
      <NavDropdown />
      <main className="dashboard mb-4">
        <div className="container">
          <h6 className="text-center">
            <Link className="fw-bold" to="/">HOME</Link>
            {' '}
            &gt;
            {' '}
            {currentTab.toUpperCase()}
          </h6>
          <Main tab={currentTab} setTab={setCurrentTab} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default UserDashboard;
