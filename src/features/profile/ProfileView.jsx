import { useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { useSelector, useDispatch } from 'react-redux';
import { getUserData } from './profileSlice';
import UserHeader from '../../components/UserHeader';
import Account from '../../components/Account';
import { ErrorPage } from '../../pages/ErrorPage';

function ProfileView() {
  const userConnected = useSelector((state) => state.login.isLoggedIn);
  const token = useSelector((state) => state.login.token);
  const loading = useSelector((state) => state.profile.status.loading);
  const error = useSelector((state) => state.profile.status.error);
  const userData = useSelector((state) => state.profile.data);
  const accountsData = useSelector((state) => state.profile.accountsData);
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
          {userData ? (
            <main className="main bg-blue">
              <UserHeader
                firstName={userData.firstName}
                lastName={userData.lastName}
              />
              {accountsData &&
                accountsData.map((item) => (
                  <Account
                    key={item.type}
                    title={item.title}
                    amount={item.amount}
                    description={item.description}
                  />
                ))}
            </main>
          ) : (
            <>
              {error && (
                <ErrorPage message={error?.message} code={error?.status} />
              )}
            </>
          )}
        </>
      ) : (
        <>
          <main className="main bg-blue">
            <Spinner
              className="spinner__centered"
              animation="border"
              variant="success"
              role="status"
            />
          </main>
        </>
      )}
    </>
  );
}

export default ProfileView;
