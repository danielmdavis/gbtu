import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import './App.css';
import TopBar from './TopBar.jsx';
import Footer from './Footer.jsx';
import Logo from './GBTU_LOGO_600.png';
import TopBanner from './genericprotestingfade.png';
import BottomBanner from './finebergbannerredux.png';
import Button from '@material-ui/core/Button';

function Landing() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="App">
      <TopBar />

      <img className="banner-image" src={TopBanner}/>
      <br/>
      <h1 className='title'>Change starts at home.</h1>
      <h2 className='subtitle'>A shared problem calls for a collective response.</h2>
      <br/><br/>
      <div className='main-box'><div className='main-text'>
          The Greater Boston Tenants Union is a collaborative of tenants across the greater boston area who have chosen to remain independent of nonprofits, big foundations, and government funding in order to build power that is responsive to and led by tenants. We are committed to base building and building leadership from the poorest. Our work is anti-capitalist, in order to resist the power of real estate capital that destroys our homes and our communities. Our work is anti-racist, in order to fight the gentrification and violence of the housing market, which affects the tenants of Boston unequally. COVID-19 has deepened Boston’s long standing tenant’s rights crisis. On October 17th, the governor and democratic and republican legislators alike allowed the statewide eviction moratorium to expire, all but ensuring a wave of evictions as winter sets in and COVID-19 cases spike. We are committed to organizing and building independent, tenant-led power to push back against that wave.
      </div></div>

      <br/><br/>
      <img className="bar-logo" src={Logo}/>
      <br/><br/>
      <br/><br/>
      <br/><br/>

      <Link to='/gbtu/signup'>
        <h3 className='alt-subtitle'>
          <span className='hover-other'>
            Ready to get involved?&nbsp;
            <span>
              Sign up today.
            </span>
          </span>
        </h3>
      </Link>
      <img className="footer-image" src={BottomBanner}/>
      <br/><br/>

      <Footer />

    </div>
  );
}

export default Landing;
