import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../assets/argentBankLogo.png';

export const Navbar = () => {
  const userConnected = useSelector((state) => state.login.isLoggedIn);
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
        <span>
          {userConnected && (
            <>
              <i className="fa fa-sign-out" />
              <NavLink to="/home" style={{ textDecoration: 'none' }}>
                Sign Out
              </NavLink>
            </>
          )}
          {!userConnected && (
            <NavLink to="/signin" style={{ textDecoration: 'none' }}>
              Sign In
            </NavLink>
          )}
        </span>
      </div>
    </nav>
  );
};
