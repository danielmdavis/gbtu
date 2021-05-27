import React, { useEffect } from 'react'
import './App.css';
import TopBar from './TopBar.jsx';
import Footer from './Footer.jsx';
import UnityItem from './UnityItem.jsx';
import Logo from './images/GBTU_LOGO_600.png';

function Dues() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="App">
      <TopBar />
      <br/><br/>
      <br/><br/>
      <br/><br/>
      <br/><br/>





      <UnityItem
        title='Joining and paying dues'
        body='Member dues are $5 per month. Sign up for a monthly payment:'
         />

  
      <br/><br/>
      <img className="bar-logo" src={Logo}/>
      <br/><br/>
      <br/><br/>
      <br/><br/>

      <Footer />

    </div>
  );
}

export default Dues;
