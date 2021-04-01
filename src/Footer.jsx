import React from 'react';
import './App.css';
import TopBanner from './southiebanner.png';

const Footer = (props) => {
        return (
          <div>
            <br/><br/>
            <div className='footer'>
              <div>© 2021 Greater Boston Tenants Union &nbsp; | &nbsp;
                <span className='hover-color'>Sindicato de Inquilinos de Boston</span>
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
