/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import dummy from '../../assets/images/dummy_item.jpg';
import '../../styles/Gallery.css';

const Gallery = function ({ setMapModal, img = [dummy, dummy, dummy] }) {
  return (
    <Carousel className="gallery mb-3" infiniteLoop emulateTouch stopOnHover useKeyboardArrows>
      {
        img.map((item, index) => (
          <div>
            <img alt="Dummy" src={item} />
            <p onClick={() => setMapModal(true)} className="legend d-inline">Map</p>
          </div>
        ))
      }
    </Carousel>
  );
};

export default Gallery;
