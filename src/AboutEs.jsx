import React, { useEffect } from 'react'
import './App.css';
import TopBar from './TopBar.jsx';
import TopBarEs from './TopBarEs.jsx';
import Footer from './Footer.jsx';
import GenericHeader from './GenericHeader.jsx';
import UnityItem from './UnityItem.jsx';
import Logo from './images/GBTU_LOGO_600.png';

function About() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="App">
      <TopBarEs />
      <GenericHeader title='GBTU Princios de Unidad' />

      <br/><br/>

      <UnityItem
        title='Nuestro objetivo principal es apoyar el desarrollo de sindicatos dirigidos por inquilinos que puedan ser una fuerza organizada militante que se movilice por sus propias necesidades materiales.'
        body='Aunque participamos en el trabajo de coalición, nuestra organización debe ser independiente de las ONG, las fundaciones y los grupos financiados por el gobierno para construir un poder que responda y sea dirigido por los inquilinos. Estamos comprometidos con la construcción de bases, tomando el liderazgo de los más pobres y resistiendo el poder del capital inmobiliario que destruye nuestros hogares y nuestras comunidades.'
        />
      <UnityItem
        title='La vivienda segura, saludable y accesible es nuestro derecho colectivo.'
        body='Por lo tanto, no se puede producir ni consumir como mercancía. Estamos a favor de la abolición del mercado de la vivienda.'
        />
      <UnityItem
        title='Apoyamos las reformas no reformistas que construyen el poder de los inquilinos o mejoran las condiciones para la organización de los inquilinos y, al mismo tiempo, disminuyen el poder de la clase terrateniente.'
        body='This includes good cause eviction protections, right to counsel, expansion of fully public housing and strong rent controls. It does not include expanding private-public partnerships. We distinguish between mobilizing towards these goals, and directly organizing for collective power and recognize the latter as our primary goal as in (2).'
        />
      <UnityItem
        title='Entendemos nuestra organización como una organización antirracista.'
        body='En Boston, las comunidades negras, latinas e indígenas son las más afectadas por el sufrimiento causado por el capital inmobiliario. La transferencia de riqueza de los estadounidenses negros a los estadounidenses blancos a través de prácticas racistas como la línea roja ha tenido efectos devastadores y violentos, como lo demuestra la diferencia de casi treinta años en la esperanza de vida entre los vecindarios de Nubian Square y Back Bay. Por lo tanto intervenir contra el mercado inmobiliario es intervenir para apoyar la resistencia organizada de las comunidades negras, indígenas y latinx.'
        />
      <UnityItem
        title='Nuestra organización es una organización feminista.'
        body='El aislamiento social y la inseguridad de la vivienda provocados por los modos capitalistas de producción de vivienda proporcionan las condiciones para la violencia de género contra las mujeres y las personas LGBQTI.'
        />
      <UnityItem
        title='Nos organizamos para enfrentar a la clase propietaria (terrateniente), beneficiaria del inhumano sistema habitacional actual.'
        body='Reconocemos que Estados Unidos fue creado con tierras que los colonizadores europeos robaron a los pueblos indígenas. Desde entonces, la privatización de esta tierra ha permitido a la clase propietaria acumular riqueza a expensas del resto, y lucharán para proteger sus intereses económicos.'
        />
      <UnityItem
        title='Reconocemos que la explotación del mercado inmobiliario no puede existir sin la violencia racista del estado carcelario.'
        body='Por lo tanto, los objetivos de la desmercantilización de la vivienda y la abolición de la policía y las cárceles son inextricables.'
        />

      <img className="bar-logo" src={Logo}/>
      <br/><br/>
      <br/><br/>
      <br/><br/>
      <br/><br/>

      <Footer />

    </div>
  );
}

export default About;
