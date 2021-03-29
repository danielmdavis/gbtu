import React from 'react'
import './App.css';
import TopBar from './TopBar.jsx';
import UnityItem from './UnityItem.jsx';
import Logo from './GBTU_LOGO_600.png';

function About() {

  return (
    <div className="App">
      <TopBar />
      <br/><br/>
      <br/><br/>
      <br/><br/>
      <br/><br/>

      <h2 className='alt-subtitle'>GBTU Principles of Unity</h2>
      <br/><br/>
      <br/><br/>
      <br/><br/>

      <UnityItem
        title='Our primary goal is to support the development of tenant-led unions that can be a militant organized force agitating for their own material needs.'
        body='Though we engage in coalition work, our organizing must be independent of NGOs, foundations, and government-funded groups in order to build power that is responsive to and led by tenants. We are committed to base building, taking leadership from the poorest, and resisting the power of real estate capital that destroys our homes and our communities.'
        />
      <UnityItem
        title='Safe, healthy, accessible housing is our collective right.'
        body='Therefore it cannot be produced or consumed as a commodity. We are for the abolition of the housing market.'
        />
      <UnityItem
        title='We are supportive of ‘non-reformist reforms’ that build tenant power or improve the conditions for tenant organizing, and simultaneously diminish the power of the landlord class.'
        body='This includes good cause eviction protections, right to counsel, expansion of fully public housing and strong rent controls. It does not include expanding private-public partnerships. We distinguish between mobilizing towards these goals, and directly organizing for collective power and recognize the latter as our primary goal as in (2).'
        />
      <UnityItem
        title='We understand our organizing as anti-racist organizing.'
        body='In Boston, Black, Latinx and Indigenous communities bear the brunt of suffering caused by real estate capital. The transfer of wealth from Black Americans to White Americans through racist practices such as redlining has had devastating and violent effects, as shown by the nearly thirty year difference in life expectancy between the neighborhoods of Nubian Square and Back Bay. Therefore intervening against the real estate market is intervening to support the organized resistance of Black, Indigenous and Latinx communities.'
        />
      <UnityItem
        title='Our organizing is feminist organizing.'
        body='Social isolation and housing insecurity brought about by capitalist modes of production of housing provides the conditions for gendered violence against women and LGBQTI people.'
        />
      <UnityItem
        title='We organize to confront the property-owning (landlord) class, the beneficiary of the current, inhumane housing system.'
        body='We recognize the United States was created with land that European colonizers stole from indigenous people. The privatization of this land has since enabled the property-owning class to accumulate wealth at the expense of the rest, and they will fight to protect their economic interest.'
        />
      <UnityItem
        title='We recognize that the exploitation of the real estate market cannot exist without the racist violence of the carceral state.'
        body='Therefore, the goals of decommodification of housing and abolition of police and prisons are inextricable.'
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

export default About;
