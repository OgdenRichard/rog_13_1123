import Modal from 'react-bootstrap/Modal';

function ModalView({ modalShow, closeModal }) {
  return (
    <>
      <Modal
        show={modalShow}
        onHide={closeModal}
        backdrop="static"
        keyboard={false}
        centered
        style={{ backgroundColor: 'rgba(52, 52, 52, 0.8)' }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit username</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="input-wrapper">
            <label htmlFor="firstname">
              First name
              <input type="text" id="firstname" />
            </label>
          </div>
          <div className="input-wrapper">
            <label htmlFor="lastname">
              Last name
              <input type="text" id="lastname" />
            </label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="cancel-button"
            onClick={() => closeModal()}
          >
            Cancel
          </button>
          <button type="button" className="edit-button">
            Send
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalView;
