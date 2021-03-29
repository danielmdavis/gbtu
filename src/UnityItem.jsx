import React from 'react';
import './App.css';

const UnityItem = (props) => {
        return (
          <div >
            <div className='subtitle-box'>
              <h4 className='subtitle'>
                {props.title}
              </h4>
            </div>
            <br/>
            <div className='main-box'><div className='main-text'>
              {props.body}
            </div></div>
            <br/><br/>
            <br/><br/>
          </div>
        )
}

export default UnityItem;
