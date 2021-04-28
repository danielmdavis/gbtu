import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Logo from './GBTU_LOGO_600_gray.png';
import Button from '@material-ui/core/Button';

function TopBar() {

  let [menuVisibility, setMenuVisibility] = useState('top-bar')

  async function handleOpen() {
    setMenuVisibility('top-bar-open')
  }

  return (
  <div>
    <nav  className={menuVisibility} id="nav-menu">

      <div class="top-bar-left">
          <ul class="vertical medium-horizontal dropdown menu" data-dropdown-menu>
            <Link to='/gbtu/'>
              <img className="bar-logo" src={Logo} />
            </Link>
            <Link to='/gbtu/fightingretaliation'>
              <Button className="bar-button" variant="outlined" size="large">Fighting Retaliation</Button>
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
      <img onClick={handleOpen} className="bar-logo-small" src={Logo} />
  </div>
</div>
  )
}

export default TopBar;
