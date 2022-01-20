import React from 'react';
import {
  FloatingLabel, Form,
} from 'react-bootstrap';

const Dropdown = function ({
  value = null, setValue = null, label = '', options, className = '', fw = label, ...rest
}) {
  return (label !== '' ? (
    <FloatingLabel className={`text-black text-nowrap text-start me-2 ${className}`} label={label} {...rest}>
      <Form.Control
        className="shadow-none"
        as="select"
        value={value}
        onChange={(e) => {
          if (setValue !== null) {
            setValue(e.target.value);
          }
        }}
      >
        <option>{fw}</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </Form.Control>
    </FloatingLabel>
  ) : (
    <Form.Control
      className={`shadow-none ${className}`}
      as="select"
      value={value}
      onChange={(e) => {
        if (setValue !== null) {
          setValue(e.target.value);
        }
      }}
    >
      <option>{fw}</option>
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </Form.Control>
  ));
};

export default Dropdown;
