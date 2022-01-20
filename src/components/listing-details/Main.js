import React from 'react';
import ModalBox from '../global/ModalBox';
import Amenities from './Amenity';
import Description from './Description';
import Gallery from './Gallery';
import Location from './Location';
import Map from './Map';
import Overview from './Overview';
import Statistics from './Statistics';

const Main = function () {
  const [mapModal, setMapModal] = React.useState(false);

  return (
    <main style={{ marginTop: 0 }}>
      <div className="title mb-3">
        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
      </div>
      <Gallery setMapModal={setMapModal} />
      <Modal mapModal={mapModal} setMapModal={setMapModal} />
      <hr />
      <Statistics />
      <hr />
      <AllInfo />
    </main>
  );
};

const Modal = function ({ mapModal, setMapModal }) {
  return (
    <ModalBox
      show={mapModal}
      onHide={() => setMapModal(false)}
    >
      <div className="p-3 text-center">
        <h4 className="mb-3">View the exact location on Map</h4>
        <Map />
        <small className="text-muted">Use mouse to scroll or move map</small>
      </div>
    </ModalBox>
  );
};

const AllInfo = function () {
  return (
    <>
      <Overview />
      <Description />
      <Location />
    </>
  );
};

export default Main;
