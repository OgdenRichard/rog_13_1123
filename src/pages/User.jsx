import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Account from '../components/Account';
import { account } from '../data/accountPlaceholder';

function User() {
  const userConnected = useSelector((state) => state.login.isLoggedIn);
  return (
    <>
      {userConnected ? (
        <>
          <main className="main bg-dark">
            <div className="user-header">
              <h1>
                Welcome back <br /> Jean-Michel
              </h1>
              <button type="button" className="edit-button">
                Edit name
              </button>
            </div>
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
      ) : (
        <Navigate to="/home" replace />
      )}
    </>
  );
}

export default User;
