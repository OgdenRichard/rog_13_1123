import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { setPassword, setUsername, setRemember, userLogin } from './loginSlice';

function LoginView() {
  const username = useSelector((state) => state.login.credentials.login);
  const pass = useSelector((state) => state.login.credentials.password);
  const remember = useSelector((state) => state.login.credentials.remember);
  const loading = useSelector((state) => state.login.auth.loading);
  const error = useSelector((state) => state.login.auth.error);
  const userConnected = useSelector((state) => state.login.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <>
      {!userConnected ? (
        <form action="">
          <div className="input-wrapper">
            <label htmlFor="username">
              Username
              <input
                type="text"
                className="login__email"
                id="username"
                placeholder={remember ? username : ''}
                onChange={(e) => dispatch(setUsername(e.target.value))}
              />
            </label>
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">
              Password
              <input
                type="password"
                id="password"
                onChange={(e) => dispatch(setPassword(e.target.value))}
              />
            </label>
          </div>
          <div className="input-remember">
            <label htmlFor="remember-me">
              <input
                type="checkbox"
                id="remember-me"
                checked={remember}
                onChange={(e) => dispatch(setRemember(e.target.checked))}
              />
              Remember me
            </label>
          </div>
          {error && <Alert variant="danger">{error.message}</Alert>}
          <button
            type="button"
            className="sign-in-button"
            onClick={() =>
              dispatch(userLogin({ email: username, password: pass }))
            }
          >
            {loading ? <Spinner animation="border" size="sm" /> : 'Log In'}
          </button>
        </form>
      ) : (
        <Navigate to="/profile" />
      )}
    </>
  );
}

export default LoginView;
