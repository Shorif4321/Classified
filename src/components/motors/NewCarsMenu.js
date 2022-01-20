import React from 'react';
import SwiperCore, {
  Pagination,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { Tab, Tabs } from 'react-bootstrap';
import '../../styles/CarsMenu.css';
import dummy from '../../assets/images/dummy_item.jpg';
import ItemCard from '../Homepage/ItemCard';

SwiperCore.use([Pagination]);

const NewCarsMenu = function () {
  return (
    <section className="carsMen mt-3 bg-light pb-2 pt-3">
      <div className="container">
        <h3>Featured New Cars</h3>
        <Tabs defaultActiveKey="popular" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="popular" title="Popular"><CategoryTab /></Tab>
          <Tab eventKey="upcoming" title="Upcoming"><CategoryTab /></Tab>
          <Tab eventKey="newly" title="Newly Launched"><CategoryTab /></Tab>
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
      slidesPerView={4}
      loop
      observer
      observeParents
      className="mySwiper"
    >
      <SwiperSlide>
        <ItemCard size={12} />
      </SwiperSlide>
      <SwiperSlide>
        <ItemCard size={12} />
      </SwiperSlide>
      <SwiperSlide>
        <ItemCard size={12} />
      </SwiperSlide>
      <SwiperSlide>
        <ItemCard size={12} />
      </SwiperSlide>
      <SwiperSlide>
        <ItemCard size={12} />
      </SwiperSlide>
      <SwiperSlide>
        <ItemCard size={12} />
      </SwiperSlide>
    </Swiper>
  );
};

export default NewCarsMenu;
