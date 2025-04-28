import React from 'react'
import Navbar from '../components/Navbar'
import about from "../assets/about.png"

const About = () => {
  return (
    <div className=''>
      <Navbar/>
      <div className='flex gap-4 justify-center items-center bg-amber-100 pl-4'>
        <h1 className='font-bold about-text'>We are here to help you with your holiday trip.</h1>
        <img src={about} alt="" />
      </div>
   
    </div>
  )
}

export default About
