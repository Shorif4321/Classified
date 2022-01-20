/* eslint-disable react/no-array-index-key */
import React from 'react';
import Button from '../../util/Button';
import useFormFields from '../../../hooks/useFormFields';
import {
  Input, MC, SimpleInput, Toggler,
} from '../Fields';
import ModalBox from '../../global/ModalBox';
import AdPreview from '../AdPreview';
import OTP from '../OTP';
import Dropdown from '../../util/Dropdown';

const MobileForm = function () {
  const { mobileDetail, mobileSpec, mobileSpec2 } = useFormFields();
  const [previewModal, setPreviewModal] = React.useState(false);
  const [otpModal, setOtpModal] = React.useState(false);
  const [currentProvince, setCurrentProvince] = React.useState('');
  const [currentCity, setCurrentCity] = React.useState('');
  const cities = ['Jammu and Kashmir', 'Balochistan', 'Gilgit-Baltistan', 'Islamabad', 'Khyber Pakhtunkhwa', 'Punjab', 'Sindh'];

  return (
    <>
      <h4 className="text-center my-3">Let&apos;s know about your tablet</h4>
      <form className="w-50 mx-auto my-5 px-4" onSubmit={(e) => e.preventDefault()}>
        <h5>Overview</h5>
        <Input title="Title*" required />
        <Input title="Make*" required />
        <Input title="Model*" required />
        <Input title="Color" />
        <Toggler title={mobileDetail[0].title} radios={mobileDetail[0].options} />
        <MC radios={mobileDetail[1]} />
        <Toggler title={mobileDetail[2].title} radios={mobileDetail[2].options} />
        <Input title="Warranty year(s) left" />
        <hr className="my-4" />
        <h5>Specifications</h5>
        <Toggler title={mobileSpec[0].title} radios={mobileSpec[0].options} />
        <Toggler title={mobileSpec[1].title} radios={mobileSpec[1].options} />
        <SimpleInput title="Screen Size" />
        <SimpleInput title="Processor" />
        <SimpleInput title="RAM" />
        <SimpleInput title="Storage" />
        <SimpleInput title="Rear Camera" />
        <SimpleInput title="Front Camera" />
        <SimpleInput title="Battery Capacity" />
        <Toggler title={mobileSpec2[0].title} radios={mobileSpec2[0].options} />
        <Toggler title={mobileSpec2[1].title} radios={mobileSpec2[1].options} />
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

export default MobileForm;
