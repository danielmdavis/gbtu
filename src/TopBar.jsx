import React from 'react'
import './App.css';
import { Link } from 'react-router-dom';
import Logo from './GBTU_LOGO_600_gray.png';
import Button from '@material-ui/core/Button';

function TopBar() {

  return (
  <div>
    <nav class="top-bar" id="nav-menu">

      <div class="top-bar-left">
          <ul class="vertical medium-horizontal dropdown menu" data-dropdown-menu>
            <Link to='/gbtu/'>
              <img className="bar-logo" src={Logo} />
            </Link>
            <Link to='/gbtu/rights'>
              <Button className="bar-button" variant="outlined" size="large">Know Your Rights</Button>
            </Link>
            <Link to='/gbtu/signup'>
              <Button className="bar-button" variant="outlined" size="large">Organize with Us</Button>
            </Link>
            <Link to='/gbtu/about'>
              <Button className="bar-button" variant="outlined" size="large">About</Button>
            </Link>
            <Link to='/gbtu/about'>
              <Button className="bar-button" variant="outlined" size="large">En Español</Button>
            </Link>
            <ul class="submenu menu vertical medium-horizontal" data-submenu></ul>
          </ul>
      </div>

      <div class="top-bar-right">
          <ul class="vertical medium-horizontal dropdown menu" data-dropdown-menu>
                  <ul class="submenu menu vertical medium-horizontal" data-submenu></ul>
          </ul>
      </div>
  </nav>
  <div style={{position: 'fixed', justifyContent: 'center'}} className='top-bar-small'>
    <Link to='/gbtu/'>
      <img className="bar-logo-small" src={Logo} />
    </Link>
  </div>
</div>
  )
}

export default TopBar;
