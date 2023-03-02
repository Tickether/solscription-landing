import './navbar.css';
import logo from '../../assets/logos/solscription_logo_white_text.svg';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="navbarMenu">
          <span>How it Works?</span>
          <span>Partners</span>
          <span>Team</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;