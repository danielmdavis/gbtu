import React, { useState } from 'react';
import './App.css';
import { Link, useLocation } from 'react-router-dom';
import Logo from './images/GBTU_LOGO_600_gray.png';
import Button from '@material-ui/core/Button';
import SocialBar from './SocialBar.jsx';

function TopBar() {

  let [menuVisibility, setMenuVisibility] = useState('top-bar')

  let currentPath = useLocation();
  // currentPath = currentPath.pathname.slice(5)
  currentPath = currentPath.pathname
  const esPath = 'es' + currentPath

  async function handleOpen() {
    setMenuVisibility('top-bar-open')
  }

  return (
  <div className="bar">
    <nav  className={menuVisibility} id="nav-menu">

      <ul class="vertical medium-horizontal dropdown menu" data-dropdown-menu>
        <Link to='/'>
          <img className="bar-logo" src={Logo} />
        </Link>
        <Link to='/fightingretaliation'>
          <Button className="bar-button" variant="outlined" size="large">Fighting Retaliation</Button>
        </Link>
        <Link to='/signup'>
          <Button className="bar-button" variant="outlined" size="large">Organize with Us</Button>
        </Link>
        <Link to='/about'>
          <Button className="bar-button" variant="outlined" size="large">About</Button>
        </Link>
        <Link to={esPath}>
          <Button className="bar-button" variant="outlined" size="large">En Español</Button>
        </Link>
      </ul>
      <SocialBar />

  </nav>
  <div style={{position: 'fixed', justifyContent: 'center'}} className='top-bar-small'>
      <img onClick={handleOpen} className="bar-logo-small" src={Logo} />
  </div>
</div>
  )
}

export default TopBar;
