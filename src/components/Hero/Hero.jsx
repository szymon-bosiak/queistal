import React from 'react'
import './hero.css'
import hero from '../../assets/hero.jpg'
import logo from '../../assets/queistal_logo_dark.svg'
import lines from '../../assets/lines_grip.svg'




const Hero = () => {
  return (
    <div className='hero_container'>

      <div className='nav'>
        <img className='nav-logo' src={logo} alt='logo' />
        <div className='nav-main'>
          <img src={lines} alt="Open menu" />
        </div>
        <p className='nav-contact'>KONTAKT</p>
      </div>

      <div className='container'>

        <div className='container-flex'>

          <div className='hero_container-heading'>
            <div className='hero_container-heading-mid'>
              <h3>NASZĄ PASJĄ JEST</h3>
            </div>

            <div className='hero_container-heading-grid-lower'>
              <div className='hero_container-heading-small'>
                <p>Projektujemy i tworzymy zabudowę drewnianą skrojoną na twoje potrzeby</p>
              </div>

              <div className='hero_container-heading-big'>
                <h1>ARCHITEKTURA DREWNIANA</h1>
              </div>
            </div>
          </div>

          <div className='hero_container-img'>
            <div className='hero_container-triangle-upper'></div>
            <img src={hero} alt='Picture of gazo.' />
            <div className='hero_container-txt'>
              <h3>Projekt</h3>
              <p>przystanku dla pieszych</p>
            </div>
            <div className='hero_container-triangle-lower'></div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero