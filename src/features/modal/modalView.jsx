import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { closeModal, editUserName } from './modalSlice';

function ModalView() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.edit.isOpen);
  const error = useSelector((state) => state.edit.status.error);
  const token = useSelector((state) => state.login.token);
  const close = () => dispatch(closeModal());
  const handleSubmit = () => {
    dispatch(
      editUserName({
        token,
        username: {
          firstName,
          lastName,
        },
      }),
    );
  };
  return (
    <>
      <Modal
        show={showModal}
        onHide={close}
        backdrop="static"
        keyboard
        centered
        style={{ backgroundColor: 'rgba(52, 52, 52, 0.8)' }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit username</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && (
            <Alert variant="danger">
              Error {error?.status} : {error?.message}
            </Alert>
          )}
          <div className="input-wrapper">
            <label htmlFor="firstname">
              First name
              <input
                type="text"
                id="firstname"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
          </div>
          <div className="input-wrapper">
            <label htmlFor="lastname">
              Last name
              <input
                type="text"
                id="lastname"
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="cancel-button"
            onClick={() => close()}
          >
            Cancel
          </button>
          <button
            type="button"
            className="edit-button"
            onClick={() => handleSubmit()}
          >
            Send
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalView;
