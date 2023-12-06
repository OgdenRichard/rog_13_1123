import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserData } from './profileSlice';
import UserHeader from '../../components/UserHeader';

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
      {!loading ? (
        <>
          {data ? (
            <UserHeader firstName={data.firstName} lastName={data.lastName} />
          ) : (
            <>Error</>
          )}
        </>
      ) : (
        <>Loading</>
      )}
    </>
  );
}

export default ProfileView;
