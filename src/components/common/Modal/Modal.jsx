// src/components/common/Modal.jsx
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const CustomModal = ({ show, onHide, title, children }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
        <Button variant="primary" onClick={onHide}>Save Changes</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;