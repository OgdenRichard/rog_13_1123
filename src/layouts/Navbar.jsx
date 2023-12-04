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
      <NavLink to="/profile">Test</NavLink>
      <NavLink to="/signin" style={{ textDecoration: 'none' }}>
        <div className="main-nav-item">
          <i className="fa fa-user-circle" />
          {userConnected && <span className="nav-username">Jean-Michel</span>}
          {userConnected && <i className="fa fa-sign-out" />}
          <span>{userConnected ? 'Sign Out' : 'Sign In'}</span>
        </div>
      </NavLink>
    </nav>
  );
};
