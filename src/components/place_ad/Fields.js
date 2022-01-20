/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import Dropdown from '../util/Dropdown';
import Button from '../util/Button';

export const Toggler = function ({
  radios, title,
}) {
  const [val, setVal] = useState(null);
  // eslint-disable-next-line no-shadow
  const handleClick = (op) => {
    setVal(op);
  };
  return (
    <div className="d-flex align-items-center justify-content-between my-2">
      <h6 className="m-0 text-nowrap">{title}</h6>
      <div>
        {
          radios.map((radio) => <Button type="button" onClick={() => handleClick(radio.value)} className={`px-2 mx-1 bg-transparent text-black border mb-1 ${val === radio.value && 'border-danger'}`} key={radio.value}>{radio.name}</Button>)
        }
      </div>
    </div>
  );
};

export const MC = function ({
  radios,
}) {
  const { title, options } = radios;
  return (
    <div className="d-flex align-items-center justify-content-between my-2">
      <h6 className="m-0">{title}</h6>
      <div>
        {
          options.map((radio) => <C radio={radio} key={Math.random()} />)
        }
      </div>
    </div>
  );
};

const C = function ({ radio }) {
  const [checked, setChecked] = useState(false);
  const handleClick = () => {
    const temp = !checked;
    setChecked(temp);
  };
  return (
    <Button type="button" onClick={handleClick} className={`px-2 mx-1 bg-transparent text-black border ${!checked && 'border-danger'}`} key={Math.random()}>{radio.name}</Button>
  );
};

export const Input = function ({ title, type = 'text', ...rest }) {
  return (
    <div className="form-group">
      <input
        type={type}
        className="form-control shadow-none my-2 py-2"
        placeholder={title}
        {...rest}
      />
    </div>
  );
};

export const SimpleInput = function ({
  title, unit = '', type = 'text', ...rest
}) {
  return (
    <div className="w-50 my-1 d-inline-flex align-items-center justify-content-between">
      <h6 className="text-nowrap">{title}</h6>
      <div className="w-50">
        <input
          type={type}
          className="w-50 me-3 py-0 border-0 border-bottom pb-2"
          {...rest}
        />
        <small>{unit}</small>
      </div>
    </div>
  );
};

export const CheckBoxes = function ({ options }) {
  return (
    <div className="row mb-4">
      {
        options.map((option) => (
          <div className="col-4 mb-1 d-flex align-items-center">
            <input className="me-2 form-check-input shadow-none" type="checkbox" value={option} />
            <small className="fw-normal">{option}</small>
          </div>
        ))
      }
    </div>
  );
};

export const DropdownMenu = function ({
  title, options, ...rest
}) {
  return (
    <div className="d-flex align-items-center justify-content-between my-2">
      <h6 className="m-0">{title}</h6>
      <div>
        <Dropdown options={options} {...rest} />
      </div>
    </div>
  );
};
