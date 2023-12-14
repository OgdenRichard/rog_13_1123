import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { closeModal, editUserName } from './modalSlice';

function ModalView() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.edit.isOpen);
  const token = useSelector((state) => state.login.auth.token);
  const prevUsername = useSelector((state) => state.profile.data);
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
          <div className="input-wrapper">
            <label htmlFor="firstname">
              First name
              <input
                type="text"
                id="firstname"
                placeholder={
                  prevUsername.firstName ? prevUsername.firstName : ''
                }
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
                placeholder={prevUsername.lastName ? prevUsername.lastName : ''}
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
