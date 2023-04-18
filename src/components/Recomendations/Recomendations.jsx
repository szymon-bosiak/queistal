import React from 'react'
import './recomendations.css'
import profile from '../../assets/profile.ico'

const Recomendations = () => {
  return (
      <div className='recomendations_container'>
          <div className='recomendations_container-flex'>
              <h3>//REKOMENDACJE</h3>

              <div className='swiper-flex'>
                  <div className='swiper'>
                    <div className='swiper-triangle-upper'></div>
                    <img src={profile} alt="" />
                    <h3>Janusz Zapomoga</h3>
                      <p>Chciałbym podzielić się moim wspaniałym doświadczeniem z firmą budowlaną XYZ. 
                        Zleciłem im wykonanie kompleksowej renowacji mojego domu i jestem zachwycony 
                        efektem. Od samego początku praca z nimi była przyjemnością. Zawsze mogłem na 
                        nich liczyć, gdy potrzebowałem pomocy i doradztwa. Wszystkie prace wykonywane 
                        były terminowo i z dbałością o każdy szczegół. Ich podejście do klienta i 
                        elastyczność były nieocenione, co pozwoliło mi poczuć się pewnie w trudnych 
                        momentach. Efekt końcowy przekroczył moje oczekiwania, a moje nowe, piękne i 
                        funkcjonalne wnętrze, to w dużej mierze ich zasługa. Z całego serca polecam tę 
                        firmę każdemu, kto szuka nie tylko wysokiej jakości usług budowlanych, ale 
                        także indywidualnego podejścia i zaangażowania.</p>
                    <div className='swiper-triangle-lower'></div>
                  </div>
              </div>

          </div>
      </div>
  )
}

export default Recomendations