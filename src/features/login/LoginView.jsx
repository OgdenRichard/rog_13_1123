import { useSelector, useDispatch } from 'react-redux';
import { setPassword, setUsername } from './loginSlice';

function LoginView() {
  /* const username = useSelector((state) => state.login.login);
  const password = useSelector((state) => state.login.password); */
  const dispatch = useDispatch();

  return (
    <>
      <form action="">
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={(e) => dispatch(setUsername(e.target.value))}
          />
        </div>
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
          <input type="checkbox" id="remember-me" />
        </div>
        <button type="button" className="sign-in-button">
          Sign In
        </button>
      </form>
    </>
  );
}

export default LoginView;
