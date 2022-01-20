import React from 'react';
import { Form } from 'react-bootstrap';
import { BiSearchAlt } from 'react-icons/bi';
import Button from '../util/Button';
import '../../styles/Hero.css';
import Dropdown from '../util/Dropdown';

const Hero = function () {
  const cities = ['Jammu and Kashmir', 'Balochistan', 'Gilgit-Baltistan', 'Islamabad', 'Khyber Pakhtunkhwa', 'Punjab', 'Sindh'];

  return (
    <div className="container">
      <section className="hero community-hero">
        <h3 className="text-white fw-normal text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora solut.</h3>
        <Form className="d-flex my-4" onSubmit={(e) => e.preventDefault()}>
          <input placeholder="Search Jobs Here" className="form-control mx-5" />
        </Form>
      </section>
    </div>
  );
};

export default Hero;
