import React, { useEffect, useScript } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import TopBar from './TopBar.jsx';
import Footer from './Footer.jsx';
import UnityItem from './UnityItem.jsx';
import Logo from './images/GBTU_LOGO_600.png';

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function Dues() {


  const createSubscription = (data, actions) => {
    return actions.subscription.create({
          'plan_id': 'P-01E38965615597146L6NV4WQ'
        });
  };
  const createReducedSubscription = (data, actions) => {
    return actions.subscription.create({
          'plan_id': 'P-1UF60462HL997513HL6NVY7A'
        });
  };

  const onApprove = (data, actions) => {
    alert('Subscription successful!');
  };

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
        body='Dues for full membership are $5 per month. Sign up for a monthly payment:'
         />

       <PayPalButton
        style={{ zIndex: '0' }}
        createSubscription={(data, actions) => createSubscription(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
      />

      <br/><br/>
      <br/><br/>

      <UnityItem
        title='Reduced dues'
        body='If you are unemployed you may sign up for just $1 per month. Sign up for a monthly payment:'
        />

       <PayPalButton
        style={{ zIndex: '0' }}
        createReducedSubscription={(data, actions) => createReducedSubscription(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
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
