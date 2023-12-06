import PropTypes from 'prop-types';

function Account({ title, amount, description }) {
  return (
    <>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{title}</h3>
          <p className="account-amount">{amount}</p>
          <p className="account-amount-description">{description}</p>
        </div>
        <div className="account-content-wrapper cta">
          <button type="button" className="transaction-button">
            View transactions
          </button>
        </div>
      </section>
    </>
  );
}

Account.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.string,
  description: PropTypes.string,
};

Account.defaultProps = {
  title: '',
  amount: '',
  description: '',
};

export default Account;
