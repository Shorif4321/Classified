import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Ads from './Ads';
import Favorites from './Favorites';
import Profile from './Profile';
import Searches from './Searches';
import Wallet from './Wallet';

const Main = function ({ tab, setTab }) {
  return (
    <Tabs
      activeKey={tab}
      onSelect={(k) => setTab(k)}
      defaultActiveKey="profile"
      className="mb-3"
    >
      <Tab eventKey="profile" title="Profile"><Profile /></Tab>
      <Tab eventKey="wallet" title="Wallet"><Wallet /></Tab>
      <Tab eventKey="ads" title="Ads"><Ads /></Tab>
      <Tab eventKey="favorites" title="Favorites"><Favorites /></Tab>
      <Tab eventKey="searches" title="Searches"><Searches /></Tab>
    </Tabs>
  );
};

export default Main;
