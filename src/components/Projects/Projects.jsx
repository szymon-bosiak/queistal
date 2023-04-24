import React, { useState } from 'react'
import './projects.css'
import { motion, AnimatePresence } from 'framer-motion'
import arrow from '../../assets/arrow.svg'
import decor from '../../assets/decor.svg'
import blank from '../../assets/showcase/blank.png'
import picture_1 from '../../assets/showcase/1.jpg'
import picture_2 from '../../assets/showcase/2.jpg'
import picture_3 from '../../assets/showcase/3.jpg'
import picture_4 from '../../assets/showcase/4.jpg'
import picture_5 from '../../assets/showcase/5.jpg'
import picture_6 from '../../assets/showcase/6.jpg'
import picture_7 from '../../assets/showcase/7.jpg'
import picture_8 from '../../assets/showcase/8.jpg'
import picture_9 from '../../assets/showcase/9.jpg'
import picture_10 from '../../assets/showcase/10.jpg'
import picture_11 from '../../assets/showcase/11.jpg'
import picture_12 from '../../assets/showcase/12.jpg'
import picture_13 from '../../assets/showcase/13.jpg'
import picture_14 from '../../assets/showcase/14.jpg'
import picture_15 from '../../assets/showcase/15.jpg'
import picture_16 from '../../assets/showcase/16.jpg'
import picture_17 from '../../assets/showcase/17.jpg'



const Projects = () => {

    const [index, setIndex] = useState(0);

    const pictures = [
        {
            img: picture_1,
            alt: 'Drewniana elewacja budynku'
        },
        {
            img: picture_3,
            alt: 'Drewniana wiata parkowa'
        },
        {
            img: picture_5,
            alt: 'Przystanek edukacyjny'
        },
        {
            img: picture_7,
            alt: 'Budka przeznaczona do handlu'
        },
        {
            img: picture_13,
            alt: 'Gont'
        },
        {
            img: picture_15,
            alt: 'Tężnia'
        },
        {
            img: picture_14,
            alt: 'Altana użytkowa'
        },
        {
            img: picture_8,
            alt: 'Taras widokowy'
        },
        {
            img: picture_9,
            alt: 'Krzesła leżakowe'
        },
        {
            img: picture_10,
            alt: 'Altana przystanku edukacyjnego'
        },
        {
            img: picture_11,
            alt: 'Zadaszenie'
        },
        {
            img: picture_12,
            alt: 'Ławy z krzesłami'
        },
        {
            img: picture_6,
            alt: 'Miejsce spotkań'
        },
        {
            img: picture_17,
            alt: 'Budka wolnostojąca'
        },
        {
            img: picture_2,
            alt: 'Atrakcja dla dzieci'
        },
        {
            img: picture_16,
            alt: 'Ławki z grawerunkiem'
        },
        {
            img: picture_4,
            alt: 'Schody'
        },
        {
            img: blank,
            alt: ''
        }

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

    // Animations

    const taskVariantsUncompleted = {
        initial: {
            X: 0
        },
        animate: {
            x: 0,
            transition: { duration: .5 }
        },
        hidden: {
            X: -200,
            transition: { duration: .5 }
        }
    }

    return (
        <div id='projects' className='projects_container'>
            <div className='projects_container-flex'>
                <h3>//PROJEKTY</h3>

                <div className='decors'>
                    <img className='decor top-left' src={decor} />
                    <img className='decor top-right' src={decor} />
                </div>

                <div className='showcase-flex'>
                    <div className='showcase'>

                        <div className='showcase_big'>
                            <AnimatePresence>
                                <motion.img
                                    initial={{ opacity: .75, rotate: 1 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: .5 }}
                                    className='showcase_big-img'
                                    src={pictures[index].img}
                                    alt={pictures[index].alt}
                                    key={pictures[index].img}
                                />
                                <div
                                    className='showcase_big-txt-triangle'
                                    key={index + 100}
                                >
                                    <motion.p 
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: .5 }}
                                        className='showcase_big-txt' 
                                        key={pictures[index].alt}
                                    >
                                        {pictures[index].alt}
                                    </motion.p>
                                </div>
                            </AnimatePresence>
                        </div>

                        <div className='showcase_nav'>
                            <img className={`showcase_nav-left ${index === 0 ? ' disabled' : ''}`} onClick={prev} src={arrow} alt="previous picture" />
                            <img className={`showcase_nav-right ${index === pictures.length - 2 ? ' disabled' : ''}`} onClick={next} src={arrow} alt="next picture" />
                        </div>

                    </div>
                </div>

                <div className='decors'>
                    <img className='decor bottom-left' src={decor} />
                    <img className='decor bottom-right' src={decor} />
                </div>

            </div>
        </div>
    )
}

export default Projects