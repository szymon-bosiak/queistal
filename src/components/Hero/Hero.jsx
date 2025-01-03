import React, { useEffect, useState } from "react"
import "./hero.css"
import "./nav.css"
import AOS from "aos"
import "aos/dist/aos.css"
import { BiPhoneCall } from "react-icons/bi"
import hero from "../../assets/hero.jpg"
import heroMobile from "../../assets/hero-mobile.jpg"
import logo from "../../assets/queistal_logo_dark.svg"
import lines from "../../assets/lines_grip.svg"
import phone from "../../assets/phone.svg"
import mail from "../../assets/mail.svg"

const Hero = () => {
  const [isActive, setActive] = useState("true")
  const [isClicked, setClicked] = useState("false")

  const handleToggle = () => {
    setActive(!isActive)
  }

  const handleClick = () => {
    setClicked(!isClicked)
  }

  // AOS
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className="overlap">
      <div className="nav">
        <div className="nav_pop">
          <div className={`nav_pop-inner ${isActive ? "hidden" : ""}`}>
            <a onClick={handleToggle} href="#o-nas">
              //O NAS
            </a>
            <a onClick={handleToggle} href="#realizacje">
              //REALIZACJE
            </a>
            <a onClick={handleToggle} href="#dlaczego-my">
              //DLACZEGO MY
            </a>
            <a onClick={handleToggle} href="#rekomendacje">
              //REKOMENDACJE
            </a>
          </div>
        </div>

        <div className="nav_static">
          <img className="nav-logo" src={logo} alt="logo" />

          <div className="nav-main">
            <img src={lines} onClick={handleToggle} alt="Open menu" />
          </div>

          <div className="nav-contact">
            <div>
              <div className="nav-contact-txt" onClick={handleClick}>
                <p className="nav-contact-txt-wide">KONTAKT</p>
                <p className="nav-contact-txt-narrow">
                  <BiPhoneCall className="phone" />
                </p>
              </div>

              <div className={`nav-contact-bg ${isClicked ? "clickedBg" : ""}`}>
                <a
                  className={`nav-contact-item ${isClicked ? "clicked" : ""}`}
                  href="tel:+48.782.243.640"
                >
                  <img
                    className="nav-contact-item-img"
                    src={phone}
                    alt="phone icon"
                  />
                  <h4 className="force-inline">782 243 640</h4>
                </a>
                <a
                  className={`nav-contact-item ${isClicked ? "clicked" : ""}`}
                  href="mailto:queistal@gmail.com"
                >
                  <img
                    className="nav-contact-item-img off"
                    src={mail}
                    alt="e-mail icon"
                  />
                  <h4>queistal@gmail.com</h4>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="hero" className="hero_container">
        <div className="container">
          <div className="container-flex">
            <div className="hero_container-heading">
              <div className="hero_container-heading-mid">
                <h3>NASZĄ PASJĄ JEST</h3>
              </div>
              <div className="hero_container-heading-grid-lower">
                <div className="hero_container-heading-small">
                  <p>
                    Projektujemy i tworzymy zabudowę drewnianą skrojoną na twoje
                    potrzeby
                  </p>
                </div>
                <div className="hero_container-heading-big">
                  <h1>ARCHITEKTURA DREWNIANA</h1>
                </div>
              </div>
            </div>

            <div className="hero_container-img">
              <div className="hero_container-triangle-upper"></div>
              <picture>
                <source
                  srcSet={heroMobile}
                  media="(max-width: 750px)"
                />
                <img
                  src={hero}
                  alt="Description of the image"
                />
              </picture>
              <div className="hero_container-txt">
                <h3>Projekt</h3>
                <p>przystanku dla pieszych</p>
              </div>
              <div className="hero_container-triangle-lower"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
