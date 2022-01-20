import React from 'react';
import { Form } from 'react-bootstrap';
import { BiSearchAlt } from 'react-icons/bi';
import Button from '../util/Button';
import '../../styles/Hero.css';
import Dropdown from '../util/Dropdown';

const Hero = function () {
  const cities = ['Jammu and Kashmir', 'Balochistan', 'Gilgit-Baltistan', 'Islamabad', 'Khyber Pakhtunkhwa', 'Punjab', 'Sindh'];
  const priceRanges = ['5 Lacs', '10 Lacs', '15 Lacs', '20 Lacs', '25 Lacs'];
  return (
    <div className="container">
      <section className="hero motors-hero">
        <h3 className="text-white fw-normal text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora solut.</h3>
        <Form className="d-flex my-4" onSubmit={(e) => e.preventDefault()}>
          <input placeholder="Model Number" className="form-control me-2" style={{ width: '40%' }} />
          <Dropdown options={cities} label="Choose City" />
          <Dropdown className="w-25" options={priceRanges} label="Price Range" />
          <Button className="px-3" type="submit">
            <BiSearchAlt style={{ fontSize: '30px' }} />
          </Button>
        </Form>
      </section>
    </div>
  );
};

export default Hero;
