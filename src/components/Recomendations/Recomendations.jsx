import React from "react"
import "./recomendations.css"
import man_suit from "../../assets/avatars/man_suit.svg"
import man_balding from "../../assets/avatars/man_balding.svg"
import woman_glasses from "../../assets/avatars/woman_glasses.svg"
import man_blouse from "../../assets/avatars/man_blouse.svg"

import woman_elegant from "../../assets/avatars/woman_elegant.svg"
import man_tophat from "../../assets/avatars/man_tophat.svg"
import woman_blonde from "../../assets/avatars/woman_blonde.svg"

const Recomendations = () => {
  const reviews = [
    {
      img: man_suit,
      name: "Robert Woźniak",
      position: "",
      txt: "Jestem zachwycony z wykonanej przez firmę budowlaną drewnianej altany w moim ogrodzie. Cały projekt był zrealizowany bardzo profesjonalnie. Altana doskonale wpasowała się w styl mojego ogrodu. Jestem bardzo zadowolony z efektu końcowego i polecam tę firmę każdemu, kto szuka solidnego wykonawcy.",
    },
    {
      img: woman_blonde,
      name: "Julia Sadowska",
      position: "",
      txt: "Zamówiłam w firmie budowlanej wykonanie dwóch drewnianych ławek z grawerunkiemi jestem bardzo zadowolona z efektu końcowego. Ławki są pięknie wykonane, z dbałością o każdy szczegół, a grawerunek dodaje im wyjątkowego charakteru.",
    },
    {
      img: woman_glasses,
      name: "Asia Kozłowska",
      position: "",
      txt: 'Firma "Queis Tal" zrobiła wspaniałą robotę przy budowie mojego domu. Ich zespół był bardzo zaangażowany i dbał o każdy szczegół. Wszystkie prace były wykonywane terminowo i zgodnie z planem. Polecam tę firmę każdemu, kto szuka nie tylko wysokiej jakości usług budowlanych, ale także zaangażowania i elastyczności.',
    },
    {
      img: man_blouse,
      name: "Janusz Zapomoga",
      position: "",
      txt: "Jestem bardzo zadowolony z usług firmy. Ich podejście do klienta jest niesamowite, a praca wykonana była bardzo dokładnie i z dbałością o każdy szczegół. Efekt końcowy przekroczył moje oczekiwania, a cały projekt był zakończony szybciej niż się spodziewałem. Polecam tę firmę każdemu, kto szuka profesjonalnego i rzetelnego wykonawcy.",
    },
    {
      img: woman_elegant,
      name: "Maria Kubiak",
      position: "",
      txt: "Zespół prawdziwych profesjonalistów. Wykonali dla mnie renowację domu, a ich praca była szybka, efektywna i dokładna. Polecam ich usługi z czystym sumieniem.",
    },
    {
      img: man_tophat,
      name: "Jacek Witkowski",
      position: "",
      txt: "Firma zrobiła fantastyczną robotę przy remoncie mojego mieszkania. Byli bardzo profesjonalni i zawsze dostępni, gdy potrzebowałem pomocy. Ich praca była bardzo dokładna, a efekt końcowy przekroczył moje oczekiwania. Polecam z całego serca!",
    },
    {
      img: man_balding,
      name: "Leszek Kowalczyk",
      position: "",
      txt: "Bardzo polecam. Byli niesamowicie elastyczni i zawsze stawiali moje potrzeby na pierwszym miejscu. Ich praca była bardzo szybka i efektywna, a efekt końcowy był dokładnie taki, jakiego oczekiwałem. Na pewno skorzystam z ich usług ponownie.",
    },
  ]

  return (
    <div id="rekomendacje" className="recomendations_container">
      <div className="recomendations_container-flex">
        <h3>//REKOMENDACJE</h3>

        <div className="swiper-flex">
          <div className="swiper">
            <div className="swiper-triangle-upper"></div>
            <div className="swiper-triangle-lower"></div>

            <swiper-container
              pagination="true"
              pagination-clickable="true"
              navigation="true"
              space-between="30"
              centered-slides="true"
              autoplay-delay="15000"
              autoplay-disable-on-interaction="false"
              loop="true"
              style={{
                "--swiper-navigation-color": "#E3EBD4",
                "--swiper-pagination-color": "#E3EBD4",
              }}
            >
              {reviews.map((review, index) => {
                return (
                  <swiper-slide key={index}>
                    <div className="swiper-content">
                      <div className="swiper-content-inner">
                        <img src={review.img} alt="avatar" />
                        <div className="swiper-content-inner-name">
                          <h2>{review.name}</h2>
                          <p>{review.position}</p>
                        </div>
                      </div>
                      <p className="swiper-content-inner-desc">{review.txt}</p>
                    </div>
                  </swiper-slide>
                )
              })}
            </swiper-container>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recomendations
