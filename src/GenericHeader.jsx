import React from 'react';
import './App.css';
import TopBanner from './images/southiebanner.png';

const GenericHeader = (props) => {
        return (
          <div >
            <img className="banner-image" src={TopBanner}/>
            <h2 className='alt-title'>{props.title}</h2>
          </div>
        )
}

export default GenericHeader;
