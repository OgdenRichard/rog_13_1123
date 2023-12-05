import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/login/loginSlice';
import logo from '../assets/argentBankLogo.png';

export const Navbar = () => {
  const userConnected = useSelector((state) => state.login.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/home', { replace: true });
  };

  return (
    <nav className="main-nav">
      <NavLink to="/home" style={{ textDecoration: 'none' }}>
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
      </NavLink>
      <div className="main-nav-item">
        <span className="nav-username">
          <i className="fa fa-user-circle icon-username" />
          {userConnected && (
            <NavLink
              to="/profile"
              style={{ textDecoration: 'none', marginRight: '0.5em' }}
            >
              Jean-Michel
            </NavLink>
          )}
        </span>
        {userConnected ? (
          <>
            <span className="nav-logout" onClick={() => handleLogout()}>
              <i className="fa fa-sign-out" />
              Sign Out
            </span>
          </>
        ) : (
          <>
            <NavLink to="/signin" style={{ textDecoration: 'none' }}>
              Sign In
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};
