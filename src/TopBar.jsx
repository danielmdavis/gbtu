import React from 'react'
import './App.css';
import Logo from './GBTU_LOGO_600.png';
import Button from '@material-ui/core/Button';

function TopBar() {

  return (
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
  )
}

export default TopBar;
