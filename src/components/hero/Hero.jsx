
import './hero.css';
import heroImg from '../../assets/hero/eth_portfolio.svg'

function Hero() {
  return (
    <div className="hero">
      <div className='heroWrapper'>
        <div className='left'>
          <div className='tagline'>
            <span>Accept or Pay Subscriptions with Crypto</span>
          </div>
          
          <div className="heroBtns">
              <button className="deployer">Go to Deployer</button>
              <button className="marketplace">Go to Marketplace</button>
          </div>
        </div>
        <div className='right'>
          <img className='heroImg' src={heroImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;