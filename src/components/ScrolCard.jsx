import React from 'react'
import hero1 from "../assets/hero1.jpg"
const ScrolCard = ({data}) => {
  // console.log(data)
  return (
    <div className='shadow-2xl rounded-2xl card  max-h-[200px] max-w-[300px] ' >
      <img src={hero1} alt="" className='rounded-tl-2xl rounded-tr-2xl'/>
      <div className='flex justify-between p-2 '>
        <p className='font-semibold'>{data.name}</p>
        <p className='font-semibold'>{data.price}</p>
      </div>
      <p className='tooltip'>{data.name}</p>
    </div>
  )
}

export default ScrolCard
