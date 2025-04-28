import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import tour1 from "../assets/hero2.jpg"
const Flights = () => {
  const [avail,setavail]=useState(false)
  return (
    <div>
      <Navbar/>
      <div className=' h-[400px] flex justify-center items-center w-full sm:w-full md:w-full '>
      <img src={tour1} alt="tour" className='h-[400px] w-full object-cover '/>
      <div className=' shadow-2xl rounded-2xl p-20 absolute border-2 border-amber-500'>
    <div className='flex gap-8 items-center p-4 h-20 '>
    
    <input type="text" placeholder='start Destination' className='text-xl outline-0 text-amber-500 border-2 border-amber-600 h-16 p-4 rounded-2xl bg-white' onChange={(e)=>setavail(e.target.value)}/>
     <p className='text-2xl text-amber-600'>to</p>
    <input type="text" placeholder='Last Destination' className='text-xl outline-0 text-amber-500 border-2 border-amber-600 h-16 p-4 rounded-2xl bg-white' onChange={(e)=>setavail(e.target.value)}/>
    {/* <input type="datetime" name="" id="" /> */}
   <button className='h-12 bg-white w-32  text-2xl text-amber-600 search-flight'>Search</button>
    </div>
 
      </div>
    </div>
          </div>
  )
}

export default Flights
