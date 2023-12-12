import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { setPassword, setUsername, setRemember, userLogin } from './loginSlice';

function LoginView() {
  const username = useSelector((state) => state.login.credentials.login);
  const pass = useSelector((state) => state.login.credentials.password);
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
                id="username"
                onChange={(e) => dispatch(setUsername(e.target.value))}
              />
            </label>
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">
              Password
              <input
                type="text"
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
                onChange={(e) => dispatch(setRemember(e.target.checked))}
              />
              Remember me
            </label>
          </div>
          <button
            type="button"
            className="sign-in-button"
            onClick={() =>
              dispatch(userLogin({ email: username, password: pass }))
            }
          >
            Sign In
          </button>
        </form>
      ) : (
        <Navigate to="/profile" />
      )}
    </>
  );
}

export default LoginView;
