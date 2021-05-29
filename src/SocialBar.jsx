import React from 'react';
import Insta from './images/instaicon.png';
import Twitter from './images/twittericon.png';
import './App.css';

const SocialBar = (props) => {
        return (
          <div class="top-bar-right">
            <div style={{ marginRight: '10px' }}>
              <a href="https://www.instagram.com/boston_tenants/">
                <img className="social-logo" src={Insta} />
              </a>
              <a href="https://twitter.com/bostontenants">
                <img className="social-logo" src={Twitter} />
              </a>
            </div>
          </div>
        )
}

export default SocialBar;
