import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Destination from './pages/Destination'
import Hotels from './pages/Hotels'
import Flights from './pages/Flights'
import About from './pages/About'
// import Contact from './pages/Contact'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/destinations' element={<Destination/>}/>
        <Route path="/hotels" element={<Hotels/>}/>
        <Route path="/flights" element={<Flights/>}/>
        <Route path='/about' element={<About/>}/>
        {/* <Route path='/contact' element={<Contact/>}/> */}
      </Routes>
    
    </>
  )
}

export default App
