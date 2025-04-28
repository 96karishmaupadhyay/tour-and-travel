import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Navbar = () => {
    const [isOpen, setIsopen] = useState(false);

    return (
        <div className='h-16 flex justify-between items-center pl-4 pr-4'>
            <div>
                <img src={logo} alt="" height={20} width={160} className='h-10 w-40 object-contain' />
            </div>
            <div>
                {/* Corrected action for hamburger and cross */}
                <p className='md:hidden text-4xl text-amber-600'>
                    {isOpen ? (
                        <ImCross onClick={() => setIsopen(false)} /> // Close the menu when cross is clicked
                    ) : (
                        <GiHamburgerMenu onClick={() => setIsopen(true)} /> // Open the menu when hamburger is clicked
                    )}
                </p>
            </div>

            {/* Desktop Menu */}
            <ul className='hidden md:flex gap-8 items-center'>
                <li><Link to="/" className='nav-links'>Home</Link></li>
                <li><Link to="/about" className='nav-links'>About</Link></li>
                <li><Link to="/destinations" className='nav-links'>Destination</Link></li>
                <li><Link to="/flights" className='nav-links'>Flights</Link></li>
                <li><Link to="hotels" className='nav-links'>Hotels</Link></li>
                <li><button className='cnt-btn'>Contact</button></li>
            </ul>

            {/* Mobile Menu */}
            <ul className={`md:hidden ${isOpen ? 'block' : 'hidden'} absolute top-16 right-4 bg-white p-4 z-10`}>
                <li><Link to="/" className='nav-links'>Home</Link></li>
                <li><Link to="/about" className='nav-links'>About</Link></li>
                <li><Link to="/destination" className='nav-links'>Destination</Link></li>
                <li><Link to="/flights" className='nav-links'>Flights</Link></li>
                <li><Link to="/hotels" className='nav-links'>Hotels</Link></li>
                <li><button  className='cnt-btn'>Contact</button></li>
            </ul>
        </div>
    );
}

export default Navbar;
