import { NavLink } from 'react-router-dom';
import logo from '../assets/argentBankLogo.png';

export const Navbar = () => {
  return (
    <nav className="main-nav">
      <NavLink to="/home">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
      </NavLink>
      <NavLink to="/login">
        <div className="main-nav-item">Sign In</div>
      </NavLink>
    </nav>
  );
};
