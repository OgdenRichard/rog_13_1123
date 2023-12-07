import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { editUserName } from './modalFormSlice';

function ModalView({ modalShow, closeModal }) {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const token = useSelector((state) => state.login.auth.token);
  const updateSuccess = useSelector((state) => state.edit.status.success);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(
      editUserName({
        token: token,
        username: {
          firstName: firstname,
          lastName: lastname,
        },
      }),
    );
    if (updateSuccess) {
      closeModal();
    }
  };
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
            onClick={() => closeModal()}
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
