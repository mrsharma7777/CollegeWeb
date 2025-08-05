import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Program from './Components/Program/Program.jsx'
import Title from './Components/Title/Title.jsx'
import About from './Components/About/About.jsx'
import Campus from './Components/Campus/Campus.jsx'
import Testimonials from './Components/Testimonials/Testimonials.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'
import VideoPlayer from './Components/Video Player/VideoPlayer.jsx'
const App = () => {
  const [playstate, setplaystate] = useState(false)
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Our Program' title='What We Offer' />
        <Program />
        <About setplaystate={setplaystate} />
        <Title subTitle='Gallery' title='Campus Tour' />
        <Campus />
        <Title subTitle='TESTIMONIALS' title='What Student Thinks' />
        <Testimonials />
        <Title subTitle='Contact Us' title='Get in Touch' />
        <Contact />
        <Footer />

      </div>
      <VideoPlayer playstate={playstate} setplaystate={setplaystate} />
    </div>
  )
}

export default App
