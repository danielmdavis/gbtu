import React, { useEffect } from 'react'
import './App.css';
import TopBar from './TopBar.jsx';
import Footer from './Footer.jsx';
import UnityItem from './UnityItem.jsx';
import Logo from './GBTU_LOGO_600.png';

function Signup() {

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
        title='Sign up to start organizing with GBTU'
        body='Tell us about your situation so we can build tenant power in Boston together! Fill out this form if you are a tenant who wants to join the union or start organizing your building. Your responses will be kept secure and will not be shared. Note that this form will not connect you directly with legal services; to receive legal support, contact Greater Boston Legal Services.'
         />

     <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfFECJTasiU5YIgzbK3nRq2GG0qhAyhndV1CXvRKLY0N30wAw/viewform?embedded=true" width="640" height="454" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

      <br/><br/>
      <img className="bar-logo" src={Logo}/>
      <br/><br/>
      <br/><br/>
      <br/><br/>

      <Footer />

    </div>
  );
}

export default Signup;
