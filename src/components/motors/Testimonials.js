import React from 'react';
import '../../styles/Testimonials.css';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import man from '../../assets/images/man.png';

const Testimonials = function () {
  return (
    <section className="testimonials mt-2 py-3 pb-4 bg-light">
      <div className="container">
        <h3>Testimonials</h3>
        <div className="row">
          <Testimonial />
          <Testimonial />
          <Testimonial />
        </div>
      </div>
    </section>
  );
};

const Testimonial = function () {
  return (
    <div className="col-md-4">
      <div className="testimonial">
        <p>
          <FaQuoteLeft />
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam quis risus eget urna mollis ornare vel eu leo.
          {' '}
          <FaQuoteRight />
        </p>
        <div className="testimonial-name d-flex align-items-center">
          <img src={man} alt="Person" className="rounded-circle me-3" width="70px" />
          <div>
            <h5>John Doe</h5>
            <small>CEO, Company</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
