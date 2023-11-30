import { NavLink } from 'react-router-dom';
import logo from '../assets/argentBankLogo.png';

export const Navbar = () => {
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
          <i className="fa fa-user-circle" /> <span>Sign In</span>
        </div>
      </NavLink>
    </nav>
  );
};
