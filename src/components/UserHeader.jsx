import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { openModal } from '../features/modal/modalSlice';
import ModalView from '../features/modal/modalView';

function UserHeader(props) {
  const { firstName, lastName } = props;
  const dispatch = useDispatch();
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
          onClick={() => dispatch(openModal())}
        >
          Edit name
        </button>
      </div>
      <ModalView />
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
