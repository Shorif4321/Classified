import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../util/Button';
import '../../styles/SettingsForm.css';

const SettingsForm = function () {
  return (
    <section className="settings-form">
      <Breadcrumb />
      <Form />
      <div className="d-flex justify-content-center">
        <Button className="mt-3">Connect Facebook</Button>
      </div>
    </section>
  );
};

const Breadcrumb = function () {
  return (
    <h6>
      <Link className="fw-bold" to="/">Home</Link>
      {' '}
      &gt;
      {' '}
      <Link className="fw-bold" to="/dashboard">Profile</Link>
      {' '}
      &gt; Account Settings
    </h6>
  );
};

const Form = function () {
  return (
    <form className="mt-5" onSubmit={(e) => e.preventDefault()}>
      <Field label="Name" value="Abdus Salam" />
      <Field type="password" label="Password" value="982498324" />
      <Field label="Phone" value="01973737373" />
      <Field label="Email Address" value="abdussalam1122@gmail.com" />
      <Field label="Deactivation" value="Delete My Account" dlt />
    </form>
  );
};

const Field = function ({
  label, value, type = 'text', dlt = false,
}) {
  const [editMode, setEditMode] = React.useState(false);

  return (
    <div className="input-field d-flex align-items-center justify-content-between">
      {
        !dlt ? (
          <>
            {
            editMode ? (
              <>
                <b>{label}</b>
                <input
                  className="form-control mx-3"
                  type={type}
                  value={value}
                />
              </>
            ) : (
              <span>
                <span className="fw-bold">{label}</span>
                :
                {' '}
                {type !== 'password' ? value : '********'}
              </span>
            )
          }
            <Button onClick={() => setEditMode(!editMode)} className="p-1 px-2">
              {editMode ? 'Save' : 'Edit'}
            </Button>
          </>
        ) : (
          <>
            <span>
              <span className="fw-bold">{label}</span>
              :
              {' '}
              {value}
            </span>
            <Button className="p-1 px-2">
              Deactivate
            </Button>
          </>
        )
      }
    </div>
  );
};

export default SettingsForm;
