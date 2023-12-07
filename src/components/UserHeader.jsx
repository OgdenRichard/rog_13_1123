import { useState } from 'react';
import PropTypes from 'prop-types';
import ModalFormView from '../features/edit/ModalFormView';

function UserHeader(props) {
  const { firstName, lastName } = props;
  const [showModal, displayModal] = useState(false);
  const closeModal = () => displayModal(false);
  return (
    <>
      <div className="user-header">
        <h1>
          Welcome back <br />
          {firstName} {lastName}
        </h1>
        <button
          type="button"
          className="edit-button"
          onClick={() => displayModal(true)}
        >
          Edit name
        </button>
      </div>
      <ModalFormView modalShow={showModal} closeModal={closeModal} />
    </>
  );
}

UserHeader.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
};

UserHeader.defaultProps = {
  firstName: '',
  lastName: '',
};

export default UserHeader;
