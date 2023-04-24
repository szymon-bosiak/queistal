import React, { useEffect } from 'react'
import './whyus.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import box_left from '../../assets/box_left.svg'
import box_right from '../../assets/box_right.svg'

const WhyUs = () => {

    // AOS

    useEffect(() => {
        AOS.init();
    }, [])


    return (
        <div id='whyus' className='whyus_container'>
            <div className='whyus_container-flex'>
                <h3>//DLACZEGO MY</h3>

                <div className='advantages-flex'>
                    <div className='advantages'>

                        {/* <div className='advantage'>
                            <h3>Dobra reputacja</h3>
                            <p>Reputacja naszej firmy to gwarancja satysfakcji klientów. Działamy w branży budowlanej od wielu 
                                lat i nasze doświadczenie oraz zaangażowanie są doceniane przez naszych klientów. Wybierając 
                                nas, masz pewność, że Twoje projekty będą realizowane zgodnie z planem, a jakość naszych usług 
                                będzie na najwyższym poziomie.</p>
                        </div> */}

                        <div className='advantage' data-aos="zoom-in-right">
                            <h3>WYSOKA JAKOŚĆ USŁUG</h3>
                            <p>Jesteśmy zespołem specjalistów, którzy nieustannie podnoszą swoje kwalifikacje i posiadają 
                                bogate doświadczenie w branży budowlanej. Wszystkie nasze prace wykonywane są z dbałością 
                                o najmniejsze szczegóły, aby zapewnić Ci kompleksową i wysoką jakość usług. Zaufaj nam, a 
                                będziesz miał pewność, że Twoje marzenia o idealnym domu staną się rzeczywistością.</p>
                        </div>

                        <div className='boxes'>
                            <img className='box box-left' src={box_left} alt="" data-aos="fade-up-right" data-aos-duration="600" data-aos-easing="ease-out" />
                            <img className='box box-right' src={box_right} alt="" data-aos="fade-down-left" data-aos-duration="600" data-aos-easing="ease-out" />
                        </div>

                        <div className='advantage' data-aos="zoom-in-left">
                            <h3>SZYBKA REAKCJA</h3>
                            <p>Zawsze służymy pomocą i doradztwem w każdej kwestii związanej z budową lub renowacją. Dzięki 
                                naszej elastyczności i gotowości do działania, jesteśmy w stanie sprostać nawet najbardziej 
                                wymagającym oczekiwaniom naszych klientów. Skontaktuj się z nami, a z przyjemnością odpowiemy 
                                na Twoje pytania i zaproponujemy rozwiązania dostosowane do Twoich potrzeb.</p>
                        </div>

                        <div className='advantage' data-aos="zoom-in-left">
                            <h3>DOSTĘPNOŚĆ USŁUG</h3>
                            <p>Dzięki naszemu doświadczeniu i zróżnicowanemu portfolio projektów, jesteśmy w stanie sprostać 
                                różnorodnym potrzebom naszych klientów. Oferujemy szeroki wachlarz usług związnych głównie, 
                                lecz nie wyłącznie, z budownictwem i renowacją.</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default WhyUs