import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Navbar.css';
import { FiBell, FiSearch } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsChatText } from 'react-icons/bs';
import Button from '../util/Button';
import logo from '../../logo.svg';
import NavItem from './NavItem';
import ModalBox from './ModalBox';
import Login from './Login';

const Navbar = function () {
  const [loginModal, setLoginModal] = React.useState(false);

  return (
    <nav className="nav">
      <div className="container d-flex align-items-center justify-content-between">
        <Link to="/">
          <div className="navbar-logo d-flex align-items-center">
            <img src={logo} alt="Logo" />
            <span className="ms-2 fw-normal">Classified</span>
          </div>
        </Link>
        <div className="nav-items d-flex align-items-center">
          <NavItem text="Notification">
            <FiBell />
          </NavItem>
          <NavItem path="/dashboard?tab=searches" text="Searches">
            <FiSearch />
          </NavItem>
          <NavItem path="/dashboard?tab=favorites" text="Favorites">
            <AiOutlineHeart />
          </NavItem>
          <NavItem path="/chat" text="My Chats">
            <BsChatText />
          </NavItem>
          <button onClick={() => setLoginModal(true)} type="button" className="login-button">Log in or sign up</button>
          <Link to="/place-an-ad">
            <Button>Place Your Ad</Button>
          </Link>
          <ModalBox
            show={loginModal}
            onHide={() => setLoginModal(false)}
          >
            <Login />
          </ModalBox>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
