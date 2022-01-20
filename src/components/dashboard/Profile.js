import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../util/Button';
import man from '../../assets/images/man.png';

const Profile = function () {
  return (
    <div className="profile mt-3">
      <Header />
      <ProfileInfo />
      <UpdateProfile />
    </div>
  );
};

const Header = function () {
  return (
    <div className="profile-header d-flex align-items-center justify-content-between p-3 shadow-sm rounded">
      <div className="info d-flex align-items-center">
        <div className="image">
          <img className="rounded-circle" src={man} alt="Man" width="100px" />
        </div>
        <div className="ms-3">
          <h3>Abdus Salam</h3>
          <h6>Lahore, Punjab</h6>
        </div>
      </div>
      <div className="stats d-flex align-items-center p-2 border rounded">
        <Stat title="My Ads" value="10" subtitle="ads viewed 10 times" />
        <Stat title="My Searches" value="10" subtitle="saved searches" />
        <Stat title="My Favorites" value="10" subtitle="ads saved" />
      </div>
    </div>
  );
};

const Stat = function ({ title, subtitle, value }) {
  return (
    <div style={{ minWidth: '170px' }} className="stat text-center mx-1 px-1">
      <h6>{title}</h6>
      <h5 className="fw-bold">{value}</h5>
      <small>{subtitle}</small>
    </div>
  );
};

const UpdateProfile = function () {
  return (
    <>
      <hr />
      <div className="d-flex justify-content-center">
        <Link to="/account-settings"><Button>Account Settings</Button></Link>
      </div>
    </>
  );
};

const ProfileInfo = function () {
  return (
    <div className="profile-info mt-3">
      <h5>Account Information</h5>
      <p className="fw-normal">
        <b>Name:</b>
        {' '}
        Abdus Salam
        <br />
        <b>Email:</b>
        {' '}
        abdussalam1122@gmail.com
        <br />
        <b>Mobile Number:</b>
        {' '}
        01711111111
        <br />
        <b>Account Status:</b>
        {' '}
        Active
      </p>
    </div>
  );
};

export default Profile;
