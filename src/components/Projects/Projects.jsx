import React, { useState } from "react"
import "./projects.css"
import { motion, AnimatePresence } from "framer-motion"
import { MdOutlineZoomInMap, MdOutlineZoomOutMap } from "react-icons/md"
import arrow from "../../assets/arrow.svg"
import decor from "../../assets/decor.svg"
import picture_1 from "../../assets/showcase/1.jpg"
import picture_2 from "../../assets/showcase/2.jpg"
import picture_3 from "../../assets/showcase/3.jpg"
import picture_4 from "../../assets/showcase/4.jpg"
import picture_5 from "../../assets/showcase/5.jpg"
import picture_6 from "../../assets/showcase/6.jpg"
import picture_7 from "../../assets/showcase/7.jpg"
import picture_8 from "../../assets/showcase/8.jpg"
import picture_10 from "../../assets/showcase/10.jpg"
import picture_13 from "../../assets/showcase/13.jpg"
import picture_14 from "../../assets/showcase/14.jpg"
import picture_15 from "../../assets/showcase/15.jpg"
import picture_16 from "../../assets/showcase/16.jpg"
import picture_17 from "../../assets/showcase/17.jpg"

const Projects = () => {
  const [index, setIndex] = useState(0)
  const [isZoom, setZoom] = useState(false)

  const pictures = [
    {
      img: picture_1,
      alt: "Drewniana elewacja budynku",
    },
    {
      img: picture_3,
      alt: "Drewniana wiata parkowa",
    },
    {
      img: picture_5,
      alt: "Przystanek edukacyjny",
    },
    {
      img: picture_7,
      alt: "Budka przeznaczona do handlu",
    },
    {
      img: picture_13,
      alt: "Gont",
    },
    {
      img: picture_15,
      alt: "Tężnia",
    },
    {
      img: picture_14,
      alt: "Altana użytkowa",
    },
    {
      img: picture_8,
      alt: "Taras widokowy",
    },
    {
      img: picture_10,
      alt: "Altana przystanku edukacyjnego",
    },
    {
      img: picture_6,
      alt: "Miejsce spotkań",
    },
    {
      img: picture_17,
      alt: "Budka wolnostojąca",
    },
    {
      img: picture_2,
      alt: "Atrakcja dla dzieci",
    },
    {
      img: picture_16,
      alt: "Ławki z grawerunkiem",
    },
    {
      img: picture_4,
      alt: "Schody",
    },
  ]

  function prev() {
    if (index > 0) {
      setIndex(index - 1)
    }
  }

  function next() {
    if (index < pictures.length - 2) {
      setIndex(index + 1)
    }
  }

  function ToggleSize() {
    setZoom(!isZoom)

    if (isZoom === true) {
      document.documentElement.style.overflowY = "auto"
    } else {
      document.documentElement.style.overflowY = "hidden"
    }
  }

  return (
    <div id="realizacje" className="projects_container">
      <div className="projects_container-flex">
        <h3 className="id_hook">//PROJEKTY</h3>

        <div className="decors">
          <img className="decor top-left" src={decor} />
          <img className="decor top-right" src={decor} />
        </div>

        <div className="showcase-flex">
          <div className="showcase">
            <div className="showcase_big">
              <AnimatePresence>
                <motion.img
                  initial={{ opacity: 0.75 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="showcase_big-img"
                  src={pictures[index].img}
                  alt={pictures[index].alt}
                  key={pictures[index].img}
                  onClick={ToggleSize}
                />
                <div className="showcase_big-txt-triangle" key={index + 100}>
                  <div className="showcase_big-txt">
                    <MdOutlineZoomOutMap
                      className="open"
                      onClick={ToggleSize}
                    />

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      key={pictures[index].alt}
                    >
                      {pictures[index].alt}
                    </motion.p>
                  </div>
                </div>
              </AnimatePresence>
            </div>

            <div className="showcase_nav">
              <img
                className={`showcase_nav-left ${index === 0 ? "disabled" : ""}`}
                onClick={prev}
                src={arrow}
                alt="previous picture"
              />
              <img
                className={`showcase_nav-right ${
                  index === pictures.length - 2 ? "disabled" : ""
                }`}
                onClick={next}
                src={arrow}
                alt="next picture"
              />
            </div>
          </div>
        </div>

        <div className="decors">
          <img className="decor bottom-left" src={decor} />
          <img className="decor bottom-right" src={decor} />
        </div>

        <div
          className={`absolute_showcase_big ${isZoom ? "" : "absolute_hiden"}`}
          onClick={ToggleSize}
        >
          <div className="absolute_showcase_big-container">
            <MdOutlineZoomInMap className="exit" onClick={ToggleSize} />
            <img
              className="absolute_showcase_big-img"
              src={pictures[index].img}
              alt={pictures[index].alt}
              key={pictures[index].img}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
