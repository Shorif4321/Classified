// @ts-nocheck
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import Button from '../../util/Button';
import {
  Input, Toggler,
} from '../Fields';
import ModalBox from '../../global/ModalBox';
import AdPreview from '../AdPreview';
import OTP from '../OTP';
import Dropdown from '../../util/Dropdown';
import '../../../styles/Form.css';

const AccessoriesForm = function () {
  const [previewModal, setPreviewModal] = React.useState(false);
  const [otpModal, setOtpModal] = React.useState(false);
  const [currentProvince, setCurrentProvince] = React.useState('');
  const [currentCity, setCurrentCity] = React.useState('');
  const cities = ['Jammu and Kashmir', 'Balochistan', 'Gilgit-Baltistan', 'Islamabad', 'Khyber Pakhtunkhwa', 'Punjab', 'Sindh'];

  const cOptions = [
    { name: 'New', value: '1' },
    { name: 'Used', value: '2' },
  ];

  return (
    <>
      <h4 className="text-center my-3">Let&apos;s know about your accessories</h4>
      <form className="w-50 mx-auto my-5 px-4" onSubmit={(e) => e.preventDefault()}>
        <h5>Overview</h5>
        <Input title="Title*" required />
        <Toggler title="Condition*" radios={cOptions} />
        <AccessoriesType />
        <hr className="my-4" />
        <h5>Description</h5>
        <textarea rows={10} className="form-control" placeholder="Describe your product" required />
        <hr className="my-4" />
        <h5>Set Price</h5>
        <Input title="Price*" required />
        <hr className="my-4" />
        <h5>Upload Image Here</h5>
        <Input title="Upload Image" type="file" multiple accept="image/*" required />
        <hr className="my-4" />
        <h5>Contact Info</h5>
        <Input title="Name*" required />
        <Input title="Phone Number*" required />
        <Input title="WhatsApp Number" required />
        <div>
          {currentProvince === '' ? (
            <Dropdown value={currentProvince} setValue={setCurrentProvince} label="Select Province" options={cities} />
          ) : (
            <Dropdown fw="Select City" value={currentCity} setValue={setCurrentCity} label={currentProvince} options={cities} />
          )}
        </div>
        <br />
        <div className="form-check form-switch">
          <input className="form-check-input shadow-none" type="checkbox" />
          <label className="form-check-label">Show my phone number in Ad</label>
        </div>
        <div className="form-check form-switch">
          <input className="form-check-input shadow-none" type="checkbox" />
          <label className="form-check-label">Show my WhatsApp number in Ad</label>
        </div>
        <br />
        <div className="mt-4 d-flex align-items-center justify-content-between">
          <ModalBox
            show={previewModal}
            onHide={() => setPreviewModal(false)}
            size="lg"
          >
            <AdPreview location={`${currentCity}, ${currentProvince}`} />
          </ModalBox>
          <Button onClick={() => setPreviewModal(true)} className="w-50 me-2">View Ad</Button>
          <ModalBox
            show={otpModal}
            onHide={() => setOtpModal(false)}
          >
            <OTP />
          </ModalBox>
          <Button onClick={() => setOtpModal(true)} className="w-50">Post Ad</Button>
        </div>
      </form>
    </>
  );
};

const AccessoriesType = function () {
  const handleClick = (e) => {
    if (e.target.classList.contains('active')) {
      e.target.classList.remove('active');
    } else {
      e.target.classList.add('active');
    }
  };

  return (
    <div className="d-flex">
      <h6 className="m-0 text-nowrap">Part Type</h6>
      <div className="ms-2">
        <div className="d-flex checks flex-wrap justify-content-end">
          <small onClick={handleClick}>Charger</small>
          <small onClick={handleClick}>Charger</small>
          <small onClick={handleClick}>Charger</small>
          <small onClick={handleClick}>Charger</small>
          <small onClick={handleClick}>Charger</small>
          <small onClick={handleClick}>Charger</small>
          <small onClick={handleClick}>Charger</small>
          <small onClick={handleClick}>Charger</small>
          <small onClick={handleClick}>Charger</small>
          <small onClick={handleClick}>Charger</small>
          <small onClick={handleClick}>Charger</small>
          <small onClick={handleClick}>Charger</small>
          <small onClick={handleClick}>Charger</small>
          <small onClick={handleClick}>Charger</small>
        </div>
      </div>
    </div>
  );
};

export default AccessoriesForm;
