import React from 'react';
import Homepage from '../pages/Homepage';
import Motors from '../pages/Motors';
import Property from '../pages/Property';
import Classified from '../pages/Classified';
import PlaceAnAd from '../pages/PlaceAnAd';
import UserDashboard from '../pages/UserDashboard';
import Chat from '../pages/Chat';
import AccountSettings from '../pages/AccountSettings';
import Jobs from '../pages/Jobs';
import Community from '../pages/Community';
import Mobiles from '../pages/Mobiles';
import Listing from '../pages/Listing';
import NoMatch from '../components/global/NoMatch';
import ListingDetails from '../pages/ListingDetails';
import Terms from '../pages/Terms';
import AdForm from '../pages/AdPostingForm';

const useRouterConfig = function () {
  const routes = [
    { path: '/', exact: true, component: Homepage },
    { path: '/motors', exact: true, component: Motors },
    { path: '/property', exact: true, component: Property },
    { path: '/classified', exact: true, component: Classified },
    { path: '/jobs', exact: true, component: Jobs },
    { path: '/community', exact: true, component: Community },
    { path: '/mobiles', exact: true, component: Mobiles },
    { path: '/place-an-ad', exact: true, component: PlaceAnAd },
    { path: '/place-an-ad/:cat/:subCat', exact: true, component: AdForm },
    { path: '/dashboard', exact: true, component: UserDashboard },
    { path: '/chat', exact: true, component: Chat },
    { path: '/account-settings', exact: true, component: AccountSettings },
    { path: '/terms', exact: true, component: Terms },
    { path: '/privacy', exact: true, component: Terms },
    { path: '/:category/details', component: ListingDetails },
    { path: '/:category/:subCategory', component: Listing },
    { path: '*', component: NoMatch },
  ];

  return routes;
};

export default useRouterConfig;
