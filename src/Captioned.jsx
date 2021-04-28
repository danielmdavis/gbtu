import React from 'react';
import './App.css';
import TopBanner from './southiebanner.png';

const Captioned = (props) => {
        return (
          <div style={{ width: props.width, margin: '0 auto' }}>
            <img src={props.image} />
            <div style={{ width: '90%', justify: 'left', margin: '0 auto', left: '0', marginTop: '5px' }} className='footer'>
              {props.caption}
            </div>
          </div>
        )
}

export default Captioned;
