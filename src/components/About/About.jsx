import React from 'react'
import './about.css'
import antique from '../../assets/antique.svg'
import bench from '../../assets/bench.svg'
import house from '../../assets/house.svg'
import roof from '../../assets/roof.svg'
import etc from '../../assets/etc.svg'

const About = () => {
  return (
    <div className='about_container'>
        <div className='about_container-flex'>

            <div className='about_container-txt'>
                <h3>//O NAS</h3> 
                <p>Od 2015 roku zajmujemy się drewnem. Wykonujemy nowe projekty, 
                    jak również dajemy nowe życie antykom.</p>
            </div>

            <div className='about_container-squares'>

                <div></div>
                
                <div className='about_container-square top'>
                    <img src={antique} alt="" />
                    <p>Renowacje antyków</p>
                </div>

                <div className='about_container-square bottom'>
                    <img src={house} alt="" />
                    <p>Konstrukcje budynków oraz ich elewacje</p>
                </div> 

                <div className='about_container-square top'>
                    <img src={roof} alt="" />
                    <p>Więżby dachowe</p>
                </div>

                <div className='about_container-square bottom'>
                    <img src={bench} alt="" />
                    <p>Przedmioty do ogordów lub miejsc publicznych</p>
                </div> 

                <div className='about_container-square top'>
                    <img src={etc} alt="" />
                    <p>oraz wiele innych projektów drewnianych</p>
                </div>
            </div>
            

        </div>

    </div>
  )
}

export default About