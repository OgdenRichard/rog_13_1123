import PropTypes from 'prop-types';

function UserHeader(props) {
  const { firstName, lastName } = props;

  return (
    <>
      <div className="user-header">
        <h1>
          Welcome back <br />
          {firstName} {lastName}
        </h1>
        <button type="button" className="edit-button">
          Edit name
        </button>
      </div>
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
