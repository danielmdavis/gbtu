import React, { useEffect } from 'react'
import './App.css';
import TopBar from './TopBar.jsx';
import Footer from './Footer.jsx';
import UnityItem from './UnityItem.jsx';
import GenericHeader from './GenericHeader.jsx';
import Logo from './GBTU_LOGO_600.png';

function Rights() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="App">
      <TopBar />
      <GenericHeader title='Know Your Rights' />

      <br/><br/>

      <UnityItem
        title='~*'
        body='rights coming soon'
        />



      <br/><br/>
      <br/><br/>
      <img className="bar-logo" src={Logo}/>
      <br/><br/>
      <br/><br/>
      <br/><br/>

      <Footer />

    </div>
  );
}

export default Rights;
