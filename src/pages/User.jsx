import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Account from '../components/Account';
import ProfileView from '../features/profile/ProfileView';
import { account } from '../data/accountPlaceholder';

function User() {
  const userConnected = useSelector((state) => state.login.isLoggedIn);
  return (
    <>
      <main className="main bg-dark">
        <ProfileView />
        {account.length &&
          account.map((data, index) => (
            <Account
              key={index}
              title={data.title}
              amount={data.amount}
              description={data.description}
            />
          ))}
      </main>
    </>
  );
}

export default User;
