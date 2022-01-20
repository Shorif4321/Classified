// @ts-nocheck
import React from 'react';
import '../../styles/Login.css';
import Typewriter from 'typewriter-effect';
import { BsFacebook, BsApple, BsFillTelephoneFill } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Button from '../util/Button';

const Login = function () {
  const [signType, setSignType] = React.useState('in');
  const [useEmail, setUseEmail] = React.useState(true);

  return (
    <div className="box text-center">

      {signType === 'in' && (
        <div className="login">
          <h4>
            Login to
            {' '}
            <Typewriter
              options={{
                strings: ['post an ad', 'call the seller', 'favorite an ad'],
                autoStart: true,
                loop: true,
              }}
            />
          </h4>
          <div className="login-buttons mt-5">
            <LoginButton text="Continue with Facebook">
              <BsFacebook style={{ color: '#1178F2' }} />
            </LoginButton>
            <LoginButton text="Continue with Google">
              <FcGoogle />
            </LoginButton>
            <LoginButton text="Continue with Apple">
              <BsApple />
            </LoginButton>
            <LoginButton onClick={() => setSignType('email')} text="Continue with Email">
              <MdEmail style={{ color: '#E00000' }} />
            </LoginButton>
            <LoginButton onClick={() => setSignType('number')} text="Continue with Mobile Number">
              <BsFillTelephoneFill style={{ color: '00CC00' }} />
            </LoginButton>
          </div>
          <button onClick={() => setSignType('up')} type="button" className="create-acc">Don&apos;t have an account? Create one</button>
          <br />
          <Condition />
        </div>
      )}

      {signType === 'up' && (
        <div className="signup">
          <h4>Create an account</h4>
          <div className="d-flex my-4 justify-content-between align-items-center">
            <h6 className="m-0">Create account using</h6>
            <div>
              <Button className="px-2 me-1" onClick={() => setUseEmail(true)}>Email</Button>
              <Button className="px-2" onClick={() => setUseEmail(false)}>Phone Number</Button>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="mt-3">
            <input placeholder="Your Name" type="text" className="form-control" />
            {
              useEmail ? (
                <input placeholder="Email" type="email" className="form-control" />
              ) : (
                <input placeholder="Phone Number" type="text" className="form-control" />
              )
            }
            <input placeholder="Password" type="password" className="form-control" />
            {/* <Button disabled className="signup-btn" type="submit">Sign Up</Button> */}
            <Button className="signup-btn" type="submit">Sign Up</Button>
          </form>
          <button onClick={() => setSignType('in')} type="button" className="create-acc">Already have an account? Login</button>
          <br />
          <Condition />
        </div>
      )}

      {signType === 'email' && (
        <div className="signin">
          <h4>Log in with your email</h4>
          <form onSubmit={(e) => e.preventDefault()} className="my-4">
            <input placeholder="Email" type="email" className="form-control" />
            <input placeholder="Password" type="password" className="form-control" />
            <Button className="signin-btn" type="submit">Log In</Button>
          </form>
          <div className="d-flex justify-content-between align-items-center">
            <Link className="m-0" to="forgot-password">
              <h6 className="text-danger m-0">Forgot your password?</h6>
            </Link>
            <button onClick={() => setSignType('in')} style={{ margin: 0, fontWeight: '500' }} type="button" className="create-acc">Other login options</button>
          </div>
          <br />
          <Condition />
        </div>
      )}

      {signType === 'number' && (
        <div className="signin">
          <h4>Log in with your phone number</h4>
          <form onSubmit={(e) => e.preventDefault()} className="my-4">
            <input placeholder="Number" type="text" className="form-control" />
            <input placeholder="Password" type="password" className="form-control" />
            <Button className="signin-btn" type="submit">Log In</Button>
          </form>
          <div className="d-flex justify-content-between align-items-center">
            <Link className="m-0" to="forgot-password">
              <h6 className="text-danger m-0">Forgot your password?</h6>
            </Link>
            <button onClick={() => setSignType('in')} style={{ margin: 0, fontWeight: '500' }} type="button" className="create-acc">Other login options</button>
          </div>
          <br />
          <Condition />
        </div>
      )}

    </div>
  );
};

const LoginButton = function ({ text, children, ...rest }) {
  return (
    <div {...rest} className="login-button">
      {children}
      {text}
    </div>
  );
};

const Condition = function () {
  return (
    <small className="text-secondary">
      By signing up I agree to the
      {' '}
      <Link to="/terms-and-conditions">Terms and Conditions</Link>
      {' '}
      and
      {' '}
      <Link to="/privacy-policy">Privacy Policy</Link>
      {' '}
    </small>
  );
};

export default Login;
