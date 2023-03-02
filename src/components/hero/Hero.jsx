
import './hero.css';
import heroImg from '../../assets/hero/eth_portfolio.svg'
import heroAbstract_III from '../../assets/hero/e_6.svg'
//import heroAbstract from '../../assets/hero/e_46.svg'
//import heroAbstract_I from '../../assets/hero/e_47.svg'
//import heroAbstract_II from '../../assets/hero/e_48.svg'

/*
<img className='heroAbstract' src={heroAbstract} alt="" />
<img className='heroAbstract_I' src={heroAbstract_I} alt="" />
<img className='heroAbstract_II' src={heroAbstract_II} alt="" />
*/

function Hero() {
  return (
    <div className="hero">
      <div className='heroWrapper'>
        <div className='left'>
          <div className='tagline'>
            <span className='heroSpan'>Accept or Pay Subscriptions with Crypto</span>
            <img className='heroAbstract_III' src={heroAbstract_III} alt="" />
          </div>
          <div className="heroBtns">
            <button className="heroDeployer">Deployer</button>
            <button className="heroMarketplace">Marketplace</button>
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