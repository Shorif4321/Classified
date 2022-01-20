/* eslint-disable react/button-has-type */
import React from 'react';
import '../../styles/Button.css';

const Button = function ({ children, className = '', ...rest }) {
  return (
    <button className={`primary-button ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
