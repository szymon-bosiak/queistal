import React, { useEffect, useState } from 'react'
import './projects.css'
import arrow from '../../assets/arrow.svg'
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
            id: 1,
            img: picture_1,
            alt: 'Drewniana elewacja budynku'
        },
        {
            id: 2,
            img: picture_2,
            alt: 'Drewniana elewacja budynku'
        },
        {
            id: 3,
            img: picture_3,
            alt: 'Drewniana elewacja budynku'
        },
        {
            id: 4,
            img: picture_4,
            alt: 'Drewniana elewacja budynku'
        },
        {
            id: 5,
            img: picture_5,
            alt: 'Drewniana elewacja budynku'
        },
        {
            id: 6,
            img: picture_6,
            alt: 'Drewniana elewacja budynku'
        },
        {
            id: 7,
            img: picture_7,
            alt: 'Drewniana elewacja budynku'
        },
        {
            id: 8,
            img: picture_8,
            alt: 'Drewniana elewacja budynku'
        },
        {
            id: 9,
            img: picture_9,
            alt: 'Drewniana elewacja budynku'
        },
        {
            id: 10,
            img: picture_10,
            alt: 'Drewniana elewacja budynku'
        },
        {
            id: 11,
            img: picture_11,
            alt: 'Drewniana elewacja budynku'
        },
        {
            id: 12,
            img: picture_12,
            alt: 'Drewniana elewacja budynku'
        },
        {
            id: 13,
            img: picture_13,
            alt: 'Drewniana elewacja budynku'
        },
        {
            id: 14,
            img: picture_14,
            alt: 'Drewniana elewacja budynku'
        },
        {
            id: 15,
            img: picture_15,
            alt: 'Drewniana elewacja budynku'
        },
        {
            id: 16,
            img: picture_16,
            alt: 'Drewniana elewacja budynku'
        },
        {
            id: 17,
            img: picture_17,
            alt: 'Drewniana elewacja budynku'
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

    

  return (
    <div className='projects_container'>
        <div className='projects_container-flex'>
            <h3>//PROJEKTY</h3>

            <div className='showcase'>

                <div className='showcase_big'>
                    <img className='showcase_big-img' src={pictures[index].img} alt="" />
                    <p className='showcase_big-txt'>Drewniana elewacja budynku</p>
                </div>

                <div className='showcase_nav'>
                      <img className={`showcase_nav-left ${index === 0 ? ' disabled' : ''}`} onClick={prev} src={arrow} alt="previous picture" />
                      <img className={`showcase_nav-right ${index === pictures.length - 2 ? ' disabled' : ''}`} onClick={next} src={arrow} alt="next picture" />
                </div>

                  <div className='showcase_small'>
                      <img className='showcase_small-img' src={pictures[index + 1].img} alt="" />
                  </div>
                
            </div>
        </div>
    </div>
  )
}

export default Projects