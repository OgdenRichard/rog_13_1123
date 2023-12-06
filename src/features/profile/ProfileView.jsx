import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserData } from './profileSlice';

function ProfileView() {
  const userConnected = useSelector((state) => state.login.isLoggedIn);
  const token = useSelector((state) => state.login.auth.token);
  const dispatch = useDispatch();
  useEffect(() => {
    if (userConnected) {
      dispatch(getUserData(token));
    }
  }, [userConnected, dispatch, token]);
  return (
    <>
      <div className="user-header">
        <h1>
          Welcome back <br /> Jean-Michel
        </h1>
        <button type="button" className="edit-button">
          Edit name
        </button>
      </div>
    </>
  );
}

export default ProfileView;
