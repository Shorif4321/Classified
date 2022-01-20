import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../util/Button';

const OTP = function () {
  return (
    <div className="text-center p-4">
      <h4>Almost there</h4>
      <h6>We sent a OTP to your mobile number. Please enter the OTP below</h6>
      <form>
        <input type="text" className="form-control shadow-none my-2" />
        <div className="d-flex justify-content-between">
          <Button type="button" className="w-50 me-3 bg-transparent border border-danger text-black">Resend</Button>
          <Link to="/dashboard" className="w-50">
            <Button type="submit" className="w-100">Verify</Button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default OTP;
