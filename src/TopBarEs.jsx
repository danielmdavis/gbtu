import React, { useState } from 'react';
import './App.css';
import { Link, useLocation } from 'react-router-dom';
import Logo from './images/GBTU_LOGO_600_gray.png';
import Button from '@material-ui/core/Button';
import SocialBar from './SocialBar.jsx';

function TopBar() {

  let [menuVisibility, setMenuVisibility] = useState('top-bar')

  let currentPath = useLocation();
  currentPath = currentPath.pathname.slice(3)
  // currentPath = currentPath.pathname.slice(8)
  // const engPath = '/gbtu' + currentPath
  const engPath = currentPath
  console.log(engPath);

  async function handleOpen() {
    setMenuVisibility('top-bar-open')
  }

  return (
  <div>
    <nav  className={menuVisibility} id="nav-menu">

          <ul class="vertical medium-horizontal dropdown menu" data-dropdown-menu>
            <Link to='/es/'>
              <img className="bar-logo" src={Logo} />
            </Link>
            <Link to='/es/fightingretaliation'>
              <Button className="bar-button-es" variant="outlined" size="large">Contra Las Represalias</Button>
            </Link>
            <Link to='/es/signup'>
              <Button className="bar-button-es" variant="outlined" size="large">Organiza con nosotros</Button>
            </Link>
            <Link to='/es/about'>
              <Button className="bar-button-es" variant="outlined" size="large">Acerca de</Button>
            </Link>
            <Link to={engPath}>
              <Button className="bar-button-es" variant="outlined" size="large">English</Button>
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
