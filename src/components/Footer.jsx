import React from 'react'
// import { VscCallIncoming } from "react-icons/vsc";
import { Link } from 'react-router-dom'
// import { IoMailOpenOutline } from "react-icons/io5";
const Footer = () => {
  return (
    <div>
      <div className='flex justify-between p-4 flex-wrap bg-amber-600 text-white text-xl'>
        <div>
            <ul>
                <li>
                    {/* <VscCallIncoming/> */}
                 </li>
                <li>
                    {/* <IoMailOpenOutline/>  */}
                 </li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <div>
            <ul className='flex flex-col gap-2'>
                <li ><Link to=""  className='nav-links'>About us</Link></li>
                <li><Link to=""  className='nav-links'>Flights</Link></li>
                <li><Link to=""  className='nav-links'>Hotels</Link></li>
                <li><Link to=""  className='nav-links'>Destinations</Link></li>
                
            </ul>
             </div>
        <div>
        <ul className='flex flex-col gap-2'>
                <li><Link to=""  className='nav-links'>About us</Link></li>
                <li><Link to=""  className='nav-links'>Flights</Link></li>
                <li><Link to=""  className='nav-links'>Hotels</Link></li>
                <li><Link to=""  className='nav-links'>Destinations</Link></li>
                
            </ul>
        </div>
        <div>
        <ul className='flex flex-col gap-2'>
                <li><Link to=""  className='nav-links'>About us</Link></li>
                <li><Link to=""  className='nav-links'>Flights</Link></li>
                <li><Link to=""  className='nav-links'>Hotels</Link></li>
                <li><Link to=""  className='nav-links'>Destinations</Link></li>
                <li><Link to=""  className='nav-links'>About us</Link></li>
                <li><Link to="" className='nav-links'>Flights</Link></li>
                <li><Link to=""  className='nav-links'>Hotels</Link></li>
                <li><Link to=""  className='nav-links'>Destinations</Link></li>
                
            </ul>
        </div>
      </div>
      <div>
        <p className='p-4 border-t-2 border-amber-600 text-center' >CopyRight are relatedto this Company</p>
      </div>
    </div>
  )
}

export default Footer
