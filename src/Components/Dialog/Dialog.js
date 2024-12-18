import React from 'react';
import { Modal } from 'react-bootstrap';
import TravelForm from '../TravelForm/TravelForm';

function Dialog({ show, handleClose }) {
  return (
    <div>
      {/* Modal/Dialog */}
      <Modal  size="lg"  aria-labelledby="contained-modal-title-vcenter"
      centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book A Tour</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <TravelForm handleClose={handleClose}/>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
}

export default Dialog;
