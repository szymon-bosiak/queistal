import React from 'react'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import WhyUs from './components/WhyUs/WhyUs'
import Recomendations from './components/Recomendations/Recomendations'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <WhyUs />
      <Recomendations />
      <Footer />
    </>
  )
}

export default App