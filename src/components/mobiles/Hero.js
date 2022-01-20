import React from 'react';
import { Form } from 'react-bootstrap';
import { BiSearchAlt } from 'react-icons/bi';
import Button from '../util/Button';
import '../../styles/Hero.css';

const Hero = function () {
  const cities = ['Jammu and Kashmir', 'Balochistan', 'Gilgit-Baltistan', 'Islamabad', 'Khyber Pakhtunkhwa', 'Punjab', 'Sindh'];

  return (
    <div className="container">
      <section className="hero mobiles-hero">
        <h3 className="text-white fw-normal text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora solut.</h3>
        <Form className="d-flex my-4" onSubmit={(e) => e.preventDefault()}>
          <input placeholder="Search for Mobile or Tablet" className="form-control me-2" />
          <Button className="px-3" type="submit">
            <BiSearchAlt style={{ fontSize: '30px' }} />
          </Button>
        </Form>
      </section>
    </div>
  );
};

export default Hero;
