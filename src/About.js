import React from 'react'
import './App.css';
import Logo from './GBTU_LOGO_600.png';
import TopBanner from './genericprotestingfade.png';
import BottomBanner from './finebergbannercrop.png';
import Button from '@material-ui/core/Button';

function About() {

  return (
    <div className="App">

      <nav class="top-bar" id="nav-menu">

        <div class="top-bar-left">
            <ul class="vertical medium-horizontal dropdown menu" data-dropdown-menu>
              <img className="bar-logo" src={Logo} />
              <Button className="bar-button" variant="outlined" size="large">Know Your Rights</Button>
              <Button className="bar-button" variant="outlined" size="large">Organize with Us</Button>
              <Button className="bar-button" variant="outlined" size="large">About</Button>
              <Button className="bar-button" variant="outlined" size="large">En Español</Button>
              <ul class="submenu menu vertical medium-horizontal" data-submenu></ul>
            </ul>
        </div>

        <div class="top-bar-right">
            <ul class="vertical medium-horizontal dropdown menu" data-dropdown-menu>
                    <ul class="submenu menu vertical medium-horizontal" data-submenu></ul>
            </ul>
        </div>

      </nav>
      <img className="banner-image" src={TopBanner}/>
      <h1 className='title'>About Test.</h1>
      <br/>
      <h2 className='subtitle'>A shared problem calls for a collective response.</h2>
      <br/><br/>
      <div className='main-box'><div className='main-text'>
          The Greater Boston Tenants Union is a collaborative of tenants across the greater boston area who have chosen to remain independent of nonprofits, big foundations, and government funding in order to build power that is responsive to and led by tenants. We are committed to base building and building leadership from the poorest. Our work is anti-capitalist, in order to resist the power of real estate capital that destroys our homes and our communities. Our work is anti-racist, in order to fight the gentrification and violence of the housing market, which affects the tenants of Boston unequally. COVID-19 has deepened Boston’s long standing tenant’s rights crisis. On October 17th, the governor and democratic and republican legislators alike allowed the statewide eviction moratorium to expire, all but ensuring a wave of evictions as winter sets in and COVID-19 cases spike. We are committed to organizing and building independent, tenant-led power to push back against that wave.
      </div></div>
      <img className="bar-logo" src={Logo}/>
      <br/><br/>
      <br/><br/>
      <br/><br/>
      <h2 className='subtitle'>We know there's a problem. Heres how we fight it.</h2>
      <br/><br/>
      <div className='main-box'><div className='main-text'>
        The Greater Boston Tenants Union is a collaborative of tenants across the greater boston area who have chosen to remain independent of nonprofits, big foundations, and government funding in order to build power that is responsive to and led by tenants. We are committed to base building and building leadership from the poorest. Our work is anti-capitalist, in order to resist the power of real estate capital that destroys our homes and our communities. Our work is anti-racist, in order to fight the gentrification and violence of the housing market, which affects the tenants of Boston unequally. COVID-19 has deepened Boston’s long standing tenant’s rights crisis. On October 17th, the governor and democratic and republican legislators alike allowed the statewide eviction moratorium to expire, all but ensuring a wave of evictions as winter sets in and COVID-19 cases spike. We are committed to organizing and building independent, tenant-led power to push back against that wave.
      </div></div>
      <br/><br/>
      <br/><br/>
      <h3 className='alt-subtitle'>Ready to get involved? Sign up today.</h3>
      <img className="banner-image" src={BottomBanner}/>
      <br/><br/>
      <br/><br/>
      <br/><br/>

      <div className='footer'>
        <div>© 2021 Greater Boston Tenants Union  |  Sindicato de Inquilinos de Boston</div>
      </div>

      <br/><br/>

    </div>
  );
}

export default About;
