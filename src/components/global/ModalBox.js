// @ts-nocheck
import React from 'react';
import { Modal } from 'react-bootstrap';

const ModalBox = function ({ size = 'md', children, ...rest }) {
  return (
    <Modal
      {...rest}
      size={size}
      centered
    >
      {children}
    </Modal>
  );
};

export default ModalBox;
