import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import tour1 from "../assets/hero1.jpg"
import destination from "../datafile/data.js"
import Navbar from '../components/Navbar.jsx';
const Destination = () => {
  const [dest,setDest]=useState("")
  console.log(destination)
 
 const filteredPlaces = destination.filter(place =>
  place.name.toLowerCase().includes(dest.toLowerCase())
);
  return (
    <>
    <Navbar/>
    <div className=' h-[400px] flex justify-center items-center w-full sm:w-full md:w-full '>
      <img src={tour1} alt="tour" className='h-[400px] w-full object-cover'/>
      <div className=' shadow-2xl rounded-2xl p-20 absolute border-2 border-amber-500'>
    <div className='flex gap-8 items-center p-4 h-20 shadow-2xl rounded-2xl  bg-white w-[600px]'>
    <FaSearch className='text-2xl text-amber-500'/>
    <input type="text" placeholder='Destination,hotel,price' className='text-xl outline-0 text-amber-500' onChange={(e)=>setDest(e.target.value)}/>
    </div>
 
      </div>
    </div>

    <div className='flex justify-around gap-8 m-10 flex-wrap'>
    {filteredPlaces.map((item)=>{
      return (
        <div className='shadow-2xl p-4 pb-2 rounded-2xl w-[350px] '>
          <img src={tour1} alt="" className='rounded-2xl'/>
          <div className='flex justify-between p-2 font-semibold '>
          <p>{item.name}</p>
          <p>{item.price}</p>
          </div>
        
          </div>
      )
    })}
    </div>
    </>
  )
}

export default Destination
