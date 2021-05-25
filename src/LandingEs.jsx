import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import './App.css';
import TopBar from './TopBarEs.jsx';
import Footer from './Footer.jsx';
import Logo from './images/GBTU_LOGO_600.png';
import TopBanner from './images/finebergtopfade.png';
import BottomBanner from './images/finebergbannerredux.png';
import Button from '@material-ui/core/Button';

function Landing() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="App">
      <TopBar />

      <img className="banner-image" style={{ opacity: '100%' }} src={TopBanner}/>
      <br/>
      <h1 className='title'>El cambio comienza en casa.</h1>
      <h2 className='subtitle'>A shared problem calls for a collective response.</h2>
      <br/><br/>
      <div className='main-box'><div className='main-text'>
        Sindicato de Inquilinos de Boston es una colaboración de inquilinos en el área metropolitana de Boston que han optado por permanecer independientes de las organizaciones sin fines de lucro, las grandes fundaciones y la financiación del gobierno para construir un poder que responda y sea dirigido por los inquilinos. Estamos comprometidos con la construcción de bases y el liderazgo de los más pobres. Nuestro trabajo es anticapitalista, para resistir el poder del capital inmobiliario que destruye nuestros hogares y nuestras comunidades. Nuestro trabajo es antirracista, con el fin de luchar contra la gentrificación y la violencia del mercado de la vivienda, que afecta de manera desigual a los inquilinos de Boston. COVID-19 ha profundizado la crisis de derechos de los inquilinos de Boston desde hace mucho tiempo. El 17 de octubre, el gobernador y los legisladores democráticos y republicanos permitieron que expirara la moratoria de desalojos en todo el estado, lo que garantiza una ola de desalojos a medida que se acerca el invierno y aumentan los casos de COVID-19. Estamos comprometidos a organizar y construir un poder independiente, liderado por los inquilinos, para hacer frente a esa ola.
      </div></div>

      <br/><br/>
      <img className="bar-logo" src={Logo}/>
      <br/><br/>
      <br/><br/>
      <br/><br/>

      <Link to='/gbtu/es/signup'>
        <h3 className='alt-subtitle'>
          <span className='hover-other'>
            ¿Listo para participar?&nbsp;
            <span>
              Regístrate hoy.
            </span>
          </span>
        </h3>
      </Link>
      <img className="footer-image" src={BottomBanner}/>
      <br/><br/>

      <Footer />

    </div>
  );
}

export default Landing;
