import PropTypes from 'prop-types';

export function ErrorPage({ message, code }) {
  return (
    <main className="main bg-dark">
      <div className="error__container" id="error-page">
        <h1>Error {code}</h1>
        <h2>{message}</h2>
      </div>
    </main>
  );
}

ErrorPage.propTypes = {
  message: PropTypes.string,
  code: PropTypes.number,
};

ErrorPage.defaultProps = {
  message: 'Page not found',
  code: 404,
};
