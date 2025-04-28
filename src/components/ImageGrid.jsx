import React from 'react'
import hero1 from "../assets/hero1.jpg"
import hero2 from "../assets/hero2.jpg"
import hero3 from "../assets/hero3.jpg"
import hero4 from "../assets/hero4.jpg"

const ImageGrid = () => {
  return (
    <div className='grid grid-cols-3 grid-rows-3 '>
        <img src={hero2} alt="" className='col-span-2'/>
        <img src={hero1} alt="" className='col-span-2'/>
        <img src={hero3} alt="" className='col-span-3'/>
        <img src={hero4} alt="" className='col-span-1 row-span-3'/>
        {/* <img src={hero2} alt="" />
        <img src={hero1} alt="" /> */}
    </div>
  )
}

export default ImageGrid
