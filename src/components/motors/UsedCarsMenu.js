import React from 'react';
import SwiperCore, {
  Pagination,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { Tab, Tabs } from 'react-bootstrap';
import '../../styles/CarsMenu.css';
import { FaCarAlt } from 'react-icons/fa';

SwiperCore.use([Pagination]);

const UsedCarsMenu = function () {
  return (
    <section className="carsMenu mt-3">
      <div className="container">
        <h3>Browse Used Cars</h3>
        <Tabs defaultActiveKey="category" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="category" title="Category"><CategoryTab /></Tab>
          <Tab eventKey="city" title="City"><CategoryTab /></Tab>
          <Tab eventKey="make" title="Make"><CategoryTab /></Tab>
          <Tab eventKey="model" title="Model"><CategoryTab /></Tab>
          <Tab eventKey="budget" title="Budget"><CategoryTab /></Tab>
          <Tab eventKey="body-type" title="Body Type"><CategoryTab /></Tab>
        </Tabs>
      </div>
    </section>
  );
};

const CategoryTab = function () {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      loop
      observer
      observeParents
      className="mySwiper"
    >
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
    </Swiper>
  );
};

const Slide = function () {
  return (
    <div className="row">
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
};

const Item = function () {
  return (
    <div className="col-2">
      <div className="item">
        <FaCarAlt />
        <h5>Family Cars</h5>
      </div>
    </div>
  );
};

export default UsedCarsMenu;
