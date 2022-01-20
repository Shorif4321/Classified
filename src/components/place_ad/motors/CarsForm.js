/* eslint-disable react/no-array-index-key */
import React from 'react';
import Button from '../../util/Button';
import useFormFields from '../../../hooks/useFormFields';
import {
  CheckBoxes,
  DropdownMenu,
  Input, MC, SimpleInput, Toggler,
} from '../Fields';
import ModalBox from '../../global/ModalBox';
import AdPreview from '../AdPreview';
import OTP from '../OTP';
import Dropdown from '../../util/Dropdown';

const CarsForm = function () {
  const { vehicleData } = useFormFields();
  const [previewModal, setPreviewModal] = React.useState(false);
  const [otpModal, setOtpModal] = React.useState(false);
  const [currentProvince, setCurrentProvince] = React.useState('');
  const [currentCity, setCurrentCity] = React.useState('');
  const cities = ['Jammu and Kashmir', 'Balochistan', 'Gilgit-Baltistan', 'Islamabad', 'Khyber Pakhtunkhwa', 'Punjab', 'Sindh'];

  return (
    <>
      <h4 className="text-center my-3">Let&apos;s know about your car</h4>
      <form className="w-50 mx-auto my-5 px-4" onSubmit={(e) => e.preventDefault()}>
        <h5>Overview</h5>
        <Input title="Title*" required />
        <Input title="Make*" required />
        <Input title="Model*" required />
        <Input title="Year*" required />
        <div>
          <h6 className="mt-2 mb-1">Registered in</h6>
          {currentProvince === '' ? (
            <Dropdown value={currentProvince} setValue={setCurrentProvince} label="Select Province" options={cities} />
          ) : (
            <Dropdown fw="Select City" value={currentCity} setValue={setCurrentCity} label={currentProvince} options={cities} />
          )}
        </div>
        <Input title="Body Color" />
        <Input title="Mileage (KM)" />
        <Toggler title={vehicleData[0].title} radios={vehicleData[0].options} />
        <Toggler title={vehicleData[1].title} radios={vehicleData[1].options} />
        <Toggler title={vehicleData[2].title} radios={vehicleData[2].options} />
        <Input title="Engine Capacity (CC)" />
        <DropdownMenu title={vehicleData[3].title} fw={vehicleData[3].options[0]} options={vehicleData[3].options} />
        <Toggler title={vehicleData[4].title} radios={vehicleData[4].options} />
        <Input title="Down Payment" />
        <Input title="Monthly Installment" />
        <Toggler title={vehicleData[5].title} radios={vehicleData[5].options} />
        <hr className="my-4" />

        <h5>Features</h5>
        <hr className="my-4" />
        <CheckBoxes options={vehicleData[6].options} />

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

export default CarsForm;
