import './footer.css';
import logo from '../../assets/logos/solscription_logo_black_text.svg';
import opensea from '../../assets/footer/opensea.svg';
import twitter from '../../assets/footer/twitter.svg';
import discord from '../../assets/footer/discord.svg';
function Footer() {
  return (
    <div className="footer">
      <div className="footerWrapper">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="socials">
          <img src={opensea} alt="" />
          <img src={twitter} alt="" />
          <img src={discord} alt="" />
        </div>
        <div className="company">
          <span>Privacy Policy</span>
          <span>Terms of Use</span>
          <span>Legal</span>
        </div>
        
      </div>
    </div>
  );
}

export default Footer;