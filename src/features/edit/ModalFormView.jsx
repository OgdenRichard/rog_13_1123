import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { editUserName } from './modalFormSlice';
import { useState } from 'react';

function ModalView({ modalShow, closeModal }) {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const token = useSelector((state) => state.login.auth.token);
  const dispatch = useDispatch();
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
            onClick={() =>
              dispatch(
                editUserName({
                  token: token,
                  username: {
                    firstName: firstname,
                    lastName: lastname,
                  },
                }),
              )
            }
          >
            Send
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalView;
