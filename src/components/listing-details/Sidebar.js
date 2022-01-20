import React from 'react';
import { GoLocation } from 'react-icons/go';
import {
  BiChat, BiHeartCircle, BiPhone, BiShareAlt,
} from 'react-icons/bi';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Button from '../util/Button';
import '../../styles/Sidebar.css';
import man from '../../assets/images/man.png';

const Sidebar = function () {
  return (
    <main style={{ marginTop: 0 }}>
      <aside className="m-2 shadow-sm rounded mt-5 p-2 py-3">
        <Header />
        <ContactForm />
        <SellerInfo />
      </aside>
    </main>
  );
};

const Header = function () {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center justify-content-center">
          <h5 className="m-0 me-2">PKR</h5>
          <h3 className="m-0 text-danger">12000</h3>
        </div>
        <div className="d-flex align-items-center">
          <BiHeartCircle style={{ fontSize: '30px', color: '#e00000', marginRight: '10px' }} />
          <BiShareAlt style={{ fontSize: '28px', color: '#e00000', marginRight: '10px' }} />
        </div>
      </div>
      <div className="d-flex justify-content-between text-muted">
        <small>Karachi, Pakistan</small>
        <small>2 Minutes Ago</small>
      </div>
      <Link to="/chat">
        <Button className="w-100 py-3 my-3">
          <BiChat style={{ fontSize: '20px', marginRight: '5px' }} />
          Chat
        </Button>
      </Link>
    </>
  );
};

const ContactForm = function () {
  return (
    <form>
      <input type="text" className="form-control" placeholder="Name" />
      <input type="email" className="form-control" placeholder="Email" />
      <input type="text" className="form-control" placeholder="Phone" />
      <textarea className="form-control" placeholder="Message" />
      <Button type="submit" className="mt-2 w-100">Send Message</Button>
    </form>
  );
};

const SellerInfo = function () {
  return (
    <div className="mt-4 pt-3 border-top text-center">
      <img src={man} alt="Man" width="100px" className="rounded-circle" />
      <div>
        <h5 className="mt-1 mb-0">Sukoon Vista</h5>
        <small className="text-muted">
          <GoLocation />
          {' '}
          Lahore, Punjab, Pakistan
        </small>
        <br />
        <small className="mt-1">Member since January 2021</small>
      </div>
      <div className="d-flex verified-icons justify-content-center">
        <Icon className="text-primary"><FaFacebook /></Icon>
        <Icon verified className="text-success"><FaWhatsapp /></Icon>
        <Icon className="text-success"><BiPhone /></Icon>
        <Icon verified className="text-danger"><MdEmail /></Icon>
      </div>
    </div>
  );
};

const Icon = function ({ verified = false, children, className }) {
  if (verified) {
    return (
      <div className={`icon verified ${className}`}>
        {children}
        <div className="tick">&#10003;</div>
      </div>
    );
  }
  return (
    <div className={`icon ${className}`}>
      {children}
    </div>
  );
};

export default Sidebar;
