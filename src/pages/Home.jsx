import React from 'react'
import Navbar from '../components/Navbar'
import HeroSlide from '../components/HeroSlide'
import ScrolCard from '../components/ScrolCard'
import ScrolSection from '../components/ScrolSection'
import Footer from '../components/Footer'
import ImageGrid from '../components/ImageGrid'
import SwiperSlides from '../components/SwiperSlides'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSlide/>
      <ScrolSection/>
      {/* <ImageGrid/> */}
      {/* <SwiperSlides/> */}
      <Footer/>
    </div>
  )
}

export default Home
