// @ts-nocheck
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import useCategories from '../hooks/useCategories';
import MobileForm from '../components/place_ad/mobiles/MobileForm';
import NavbarSimple from '../components/global/NavbarSimple';
import TabletForm from '../components/place_ad/mobiles/TabletForm';
import AccessoriesForm from '../components/place_ad/mobiles/AccessoriesForm';
import PartForm from '../components/place_ad/mobiles/PartForm';
import CarsForm from '../components/place_ad/motors/CarsForm';
import VanForm from '../components/place_ad/motors/VanForm';
import BikeForm from '../components/place_ad/motors/BikeForm';
import BirdForm from '../components/place_ad/animals/BirdForm';
import LiveStockForm from '../components/place_ad/animals/LiveStock';
import PetsForm from '../components/place_ad/animals/PetsForm';
import FurnitureForm from '../components/place_ad/furniture/FurnitureForm';

const NotFound = function () {
  return <h3 className="text-center text-danger my-4">Page not found</h3>;
};

const AdPostingForm = function () {
  document.title = 'Post an Ad on Classified';

  const { categoryData } = useCategories();

  return (
    <>
      <NavbarSimple back />
      <div className="container">
        <Switch>
          <Route path="/place-an-ad/mobiles/mobile" component={MobileForm} />
          <Route path="/place-an-ad/mobiles/tablet" component={TabletForm} />
          <Route path="/place-an-ad/mobiles/accessories" component={AccessoriesForm} />
          <Route path="/place-an-ad/mobiles/parts" component={PartForm} />
          <Route path="/place-an-ad/motors/cars" component={CarsForm} />
          <Route path="/place-an-ad/motors/van & pickups" component={VanForm} />
          <Route path="/place-an-ad/motors/buses & trucks" component={VanForm} />
          <Route path="/place-an-ad/motors/bikes" component={BikeForm} />
          <Route path="/place-an-ad/animals/bird" component={BirdForm} />
          <Route path="/place-an-ad/animals/livestock" component={LiveStockForm} />
          <Route path="/place-an-ad/animals/pets food & accessories" component={PetsForm} />
          {
            categoryData.furniture.map((fur) => <Route path={`/place-an-ad/furniture/${fur.toLowerCase()}`}><FurnitureForm name={fur} /></Route>)
          }
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </>
  );
};

export default AdPostingForm;
