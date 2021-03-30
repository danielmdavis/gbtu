import React, { useEffect } from 'react'
import './App.css';
import TopBar from './TopBar.jsx';
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

      <h2 className='alt-subtitle'>Organize with Us</h2>
      <br/><br/>
      <br/><br/>
      <br/><br/>

      <form className='signup-form'><br/>
        Sign up to start organizing with GBTU<br/><br/>
        Tell us about your situation so we can build tenant power in Boston together! Fill out this form if you are a tenant who wants to join the union or start organizing your building. Your responses will be kept secure and will not be shared.<br/><br/>
        Note: This form will not connect you directly with legal services; to receive legal support, contact Greater Boston Legal Services. </form>
      <script className='signup-form' src="https://docs.google.com/forms/d/e/1FAIpQLSfFECJTasiU5YIgzbK3nRq2GG0qhAyhndV1CXvRKLY0N30wAw/viewform?embedded=true"
        form="https://docs.google.com/forms/..../viewform?embedded=true">
        <form className='signup-form' ></form>
      </script>



      <br/><br/>
      <UnityItem
        title='Our primary goal is to support the development of tenant-led unions that can be a militant organized force agitating for their own material needs.'
        body='Though we engage in coalition work, our organizing must be independent of NGOs, foundations, and government-funded groups in order to build power that is responsive to and led by tenants. We are committed to base building, taking leadership from the poorest, and resisting the power of real estate capital that destroys our homes and our communities.'
        />



      <br/><br/>
      <br/><br/>
      <img className="bar-logo" src={Logo}/>
      <br/><br/>
      <br/><br/>
      <br/><br/>

      <div className='footer'>
        <div>© 2021 Greater Boston Tenants Union  |  Sindicato de Inquilinos de Boston</div>
      </div>

      <br/><br/>

    </div>
  );
}

export default Signup;
