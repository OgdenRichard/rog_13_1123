import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserData } from './profileSlice';

function ProfileView() {
  const userConnected = useSelector((state) => state.login.isLoggedIn);
  const token = useSelector((state) => state.login.auth.token);
  const loading = useSelector((state) => state.profile.status.loading);
  const data = useSelector((state) => state.profile.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userConnected) {
      dispatch(getUserData(token));
    }
  }, [userConnected, dispatch, token]);

  return (
    <>
      {!loading && data ? (
        <>
          <div className="user-header">
            <h1>
              Welcome back <br />
              {data.firstName || ''} {data.lastName || ''}
            </h1>
            <button type="button" className="edit-button">
              Edit name
            </button>
          </div>
        </>
      ) : (
        <>Loading</>
      )}
    </>
  );
}

export default ProfileView;
