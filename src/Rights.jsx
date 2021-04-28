import React, { useEffect } from 'react'
import './App.css';
import TopBar from './TopBar.jsx';
import Footer from './Footer.jsx';
import UnityItem from './UnityItem.jsx';
import GenericHeader from './GenericHeader.jsx';
import Captioned from './Captioned.jsx';
// import Logo from './GBTU_LOGO_600.png';
import TenantPower from './images/tenantpower.jpeg';
import AlphaCrimes from './images/alphacrimes.png';
import Logo from './images/gbtulogo.png';
import AlphaLogo from './images/alphalogo.jpg';

function Rights() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="App">
      <TopBar />
      <GenericHeader title='Fighting Landlord Retaliation' />

      <br/><br/>
      <br/><br/>
      <h2 className='subtitle'>We will not let landlords stop our movement!</h2>
      <br/><br/>
      <Captioned
        width='60%'
        image={TenantPower}
        caption='Image from March 2020’s action with Fineberg Tenants Union, AimAs1, and GBTU members. Tenant union members were protesting terrible living conditions in Gerald Fineberg’s properties. Gerald Fineberg is an ICA board member and landlord. Photo credit: Adam Parshall.'
      />
      <br/><br/>
      <br/><br/>
      <div className='main-box'><div className='main-text'>
        <i>For Immediate Release: April 28 2021</i>
      </div></div>
      <br/><br/>
      <div className='main-box'><div className='main-text'>
        Alpha Management, owned by Anwar Faisal, is retaliating against tenants exercising their collective right to organize (MGL Ch. 186, § 18).  Unfortunately, my story is not unique. Many tenants face retaliation for exercising their right to organize. This is one of the many reasons why tenants across the country are organizing to fight for decommodified housing and a world without landlords.
      </div></div>
      <br/><br/>
      <div className='main-box'><div className='main-text'>
        As a member of the Alpha Tenants Union and the Greater Boston Tenants Union (GBTU), I am proud of the results that I and other union members have achieved for our community as a fully autonomous, member-funded organization.
      </div></div>
      <br/><br/>
      <div className='main-box'><div className='main-text'>
        Nearly one year ago, I started talking with my neighbors about the many ignored requests for maintenance and climbing rent prices from Alpha Management. Through hard work and struggle, our union won needed repairs to our homes and built a community amidst the pandemic. As our organizing work at Alpha Tenants Union and GBTU reached more tenants, and we won more victories in favor of our rights, Anwar Faisal’s company responded by making threats against me and the union as a whole.
      </div></div>
      <br/><br/>
      <Captioned
        width='40%'
        image={AlphaCrimes}
        caption='Photo of 63 Fellsway West fire escape, February 2021'
      />
      <br/><br/>
      <div className='main-box'><div className='main-text'>
        Anwar Faisal and Alpha Management sent me a cease and desist letter threatening to sue me and our tenants union for 40 statements made in organizing materials, public meetings and in the press. They are threatening to sue me for slander and libel, just because I asserted my right as a tenant to organize. I refuse to retract my truthful statements about our living conditions or Alpha’s notorious reputation in Boston.
      </div></div>
      <br/><br/>
      <div className='main-box'><div className='main-text'>
        I am raising money to defend myself and our tenants union from this threat. Thanks to our incredible network of tenants, we met our fundraising goal in just 12 hours with help from unions all over the country. I am overwhelmed by this support from my comrades and friends. These funds will be used to pay Jeff Feuer, our lawyer for my individual defense, and to serve as my counsel in the proceedings Mr. Faisal and Alpha Management are threatening. We will not back down in this fight and plan to counter-sue Alpha Management for retaliating against us if they file their lawsuit.
      </div></div>
      <br/><br/>
      <div className='main-box'><div className='main-text'>
        Our next steps right now are to send a letter to Alpha Management and Anwar Faisal to let them know that we will not back down, and to continue our organizing to ensure that tenants rights remain at the forefront of our movement. We will continue to fight to hold landlords accountable for providing safe and fair living conditions while we work to create a world without landlords.
      </div></div>
      <br/><br/>

      <div className='main-box'><div className='main-text'>
        Tenants are right now working to protect themselves from the landlord class that denies tenants’ rights and threatens tenants’ unity. Join the struggle and assert your rights as a tenant. You can get in touch with the Alpha Tenants Union and GBTU through our social media accounts here and here.
      </div></div>
      <br/><br/>
      <div className='main-box'><div className='main-text'>
        In solidarity,
        <br/>
        Mary Stathos, tenant and organizer
        <br/>
        With support from
      </div></div>
      <br/>

      <div>
        <img className="bar-logo" src={Logo}/>
        <img className="bar-logo" src={AlphaLogo}/>
      </div>
      <br/><br/>
      <br/><br/>
        <h4 style={{ padding: '9px' }} className='subtitle'>
            <a href='./PressStatement.pdf' download>
              <span>
                Download PDF
              </span>
            </a>
        </h4>
        <br/><br/>
        <br/><br/>

      <Footer />

    </div>
  );
}

export default Rights;
