import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Logo from './images/GBTU_LOGO_600_gray.png';
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
            <Link to='/gbtu/es/'>
              <img className="bar-logo" src={Logo} />
            </Link>
            <Link to='/gbtu/es/fightingretaliation'>
              <Button className="bar-button-es" variant="outlined" size="large">Contra Las Represalias</Button>
            </Link>
            <Link to='/gbtu/es/signup'>
              <Button className="bar-button-es" variant="outlined" size="large">Organiza con nosotros</Button>
            </Link>
            <Link to='/gbtu/es/about'>
              <Button className="bar-button-es" variant="outlined" size="large">Acerca de</Button>
            </Link>
            <Link to='/gbtu/'>
              <Button className="bar-button-es" variant="outlined" size="large">English</Button>
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
