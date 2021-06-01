import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import TopBanner from './images/southiebanner.png';

const Footer = (props) => {
        return (
          <div>
            <br/><br/>
            <div className='footer'>
              <div>© 2021 &nbsp;
                <Link to='/'>
                  <span className='hover-color'>Greater Boston Tenants Union</span>
                </Link>
                 &nbsp; | &nbsp;
                <Link to='/es/'>
                  <span className='hover-color'>Sindicato de Inquilinos de Boston</span>
                </Link>
              </div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;phone: <span className='hover-color'><a href='tel:6172099263'>617 209 9263</a></span></div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;email:&nbsp; <span className='hover-color'><a href='mailto:bostontenants@protonmail.com'>bostontenants@protonmail.com</a></span></div>
              <br/>
              <div>&nbsp;&nbsp;&nbsp;Greater Boston Legal Services: <span className='hover-color'><a href='tel:6173711234'>617 371 1234</a></span></div>
            </div>
            <br/><br/>
          </div>
        )
}

export default Footer;
