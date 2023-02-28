
import './navbar.css';
import logo from '../../assets/logos/solscription_logo_white_text.svg';

function Navbar() {
  return (
    <div className="navbar">
        <div className="navbarWrapper">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="navbarBtns">
                <button className="deployer">Go to Deployer</button>
                <button className="marketplace">Go to Marketplace</button>
            </div>
        </div>
    </div>
  );
}

export default Navbar;