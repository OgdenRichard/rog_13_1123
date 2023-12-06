import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserData } from './profileSlice';
import UserHeader from '../../components/UserHeader';
import Account from '../../components/Account';
import { ErrorPage } from '../../pages/ErrorPage';
import { account } from '../../data/accountPlaceholder';

function ProfileView() {
  const userConnected = useSelector((state) => state.login.isLoggedIn);
  const token = useSelector((state) => state.login.auth.token);
  const loading = useSelector((state) => state.profile.status.loading);
  const error = useSelector((state) => state.profile.status.error);
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
            <main className="main bg-dark">
              <UserHeader firstName={data.firstName} lastName={data.lastName} />
              {account.length &&
                account.map((accountData, index) => (
                  <Account
                    key={index}
                    title={accountData.title}
                    amount={accountData.amount}
                    description={accountData.description}
                  />
                ))}
            </main>
          ) : (
            <>{error && <ErrorPage />}</>
          )}
        </>
      ) : (
        <>Loading</>
      )}
    </>
  );
}

export default ProfileView;
