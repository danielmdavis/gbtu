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
                <Link to='/gbtu/'>
                  <span className='hover-color'>Greater Boston Tenants Union</span>
                </Link>
                 &nbsp; | &nbsp;
                <Link to='/gbtu/es/'>
                  <span className='hover-color'>Sindicato de Inquilinos de Boston</span>
                </Link>
              </div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;phone: 617 209 9263</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;email:&nbsp; bostontenants@protonmail.com</div>
              <br/>
              <div>&nbsp;&nbsp;&nbsp;Greater Boston Legal Services: 617 371 1234</div>
            </div>
            <br/><br/>
          </div>
        )
}

export default Footer;
