import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { setPassword, setUsername, setRemember, userLogin } from './loginSlice';

function LoginView() {
  const username = useSelector((state) => state.login.login);
  const pass = useSelector((state) => state.login.password);
  const userConnected = useSelector((state) => state.login.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <>
      {!userConnected ? (
        <form action="">
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              onChange={(e) => dispatch(setUsername(e.target.value))}
            />
          </div>
          {/*  TODO : wrap input in label as in codevo */}
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              onChange={(e) => dispatch(setPassword(e.target.value))}
            />
          </div>
          <div className="input-remember">
            <label htmlFor="remember-me">Remember me</label>
            <input
              type="checkbox"
              id="remember-me"
              onChange={(e) => dispatch(setRemember(e.target.checked))}
            />
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
