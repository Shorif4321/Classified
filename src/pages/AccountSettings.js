import React from 'react';
import SettingsForm from '../components/account-settings/SettingsForm';
import Footer from '../components/global/Footer';
import Navbar from '../components/global/Navbar';
import NavDropdown from '../components/global/NavDropdown';

const AccountSettings = function () {
  document.title = 'Account Settings - Classified';
  return (
    <>
      <Navbar />
      <NavDropdown />
      <main className="account-settings mb-4 container">
        <SettingsForm />
      </main>
      <Footer />
    </>
  );
};

export default AccountSettings;
