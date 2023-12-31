import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../features/modal/modalSlice';
import ModalView from '../features/modal/modalView';

function UserHeader(props) {
  const { firstName, lastName } = props;
  const dispatch = useDispatch();
  const updatedData = useSelector((state) => state.edit.data);
  return (
    <>
      <div className="user-header">
        <h1>
          Welcome back <br />
          {updatedData ? updatedData.firstName : firstName}{' '}
          {updatedData ? updatedData.lastName : lastName}
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
