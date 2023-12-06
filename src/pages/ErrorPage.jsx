import PropTypes from 'prop-types';

export function ErrorPage({ message }) {
  return (
    <main>
      <div id="error-page">
        <h1>Erreur</h1>
        <h2>{message}</h2>
      </div>
    </main>
  );
}

ErrorPage.propTypes = {
  message: PropTypes.string,
};

ErrorPage.defaultProps = {
  message: 'Page introuvable',
};
