import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import { useSelector, useDispatch } from 'react-redux';
import {
  closeModal,
  setFirstName,
  setLastName,
  editUserName,
  setInputError,
} from './modalSlice';

function ModalView() {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.edit.isOpen);
  const token = useSelector((state) => state.login.token);
  const firstName = useSelector((state) => state.edit.userName.firstName);
  const lastName = useSelector((state) => state.edit.userName.lastName);
  const inputError = useSelector((state) => state.edit.userName.inputError);
  const apiError = useSelector((state) => state.edit.status.error);
  const close = () => dispatch(closeModal());
  const handleSubmit = () => {
    if (firstName.trim() && lastName.trim()) {
      dispatch(
        editUserName({
          token,
          username: {
            firstName,
            lastName,
          },
        }),
      );
    } else {
      dispatch(setInputError(true));
    }
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
          {inputError && (
            <Alert variant="danger">
              First name and last name must contain at least one character
            </Alert>
          )}
          {apiError && (
            <Alert variant="danger">
              Error {apiError?.status} : {apiError?.message}
            </Alert>
          )}
          <div className="input-wrapper">
            <label htmlFor="firstname">
              First name
              <input
                type="text"
                id="firstname"
                onChange={(e) => dispatch(setFirstName(e.target.value))}
              />
            </label>
          </div>
          <div className="input-wrapper">
            <label htmlFor="lastname">
              Last name
              <input
                type="text"
                id="lastname"
                onChange={(e) => dispatch(setLastName(e.target.value))}
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
