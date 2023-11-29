import Account from '../components/Account';
import { account } from '../data/accountPlaceholder';

function User() {
  return (
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
  );
}

export default User;
