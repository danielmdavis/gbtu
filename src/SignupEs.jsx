import React, { useEffect } from 'react'
import './App.css';
import TopBar from './TopBarEs.jsx';
import Footer from './Footer.jsx';
import UnityItem from './UnityItem.jsx';
import Logo from './images/GBTU_LOGO_600.png';

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
        title='Regístrese para empezar a organizar con GBTU'
        body='¡Cuéntenos sobre su situación para que podamos construir juntos el poder de los inquilinos en Boston! Responda estas preguntas si es un inquilino que desea unirse al sindicato o comenzar a organizar su edificio. Sus respuestas se mantendrán seguras y no se compartirán. Nota: Este formulario no lo conectará directamente con servicios legales. Para recibir apoyo legal, comuníquese con Greater Boston Legal Services'
         />

      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdVpzL1tU1Uqp1GEhzluY8micf_-QM7p-hTPF4YYGVG_94rlA/viewform?embedded=true" width="640" height="2274" frameborder="0" marginheight="0" marginwidth="0" scrolling="no">Loading…</iframe>

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
