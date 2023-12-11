import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { closeModal, editUserName } from './modalSlice';

function ModalView() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.modal.isOpen);
  const token = useSelector((state) => state.login.auth.token);
  const close = () => dispatch(closeModal());
  const handleSubmit = () => {
    dispatch(
      editUserName({
        token,
        username: {
          firstName: firstname,
          lastName: lastname,
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
