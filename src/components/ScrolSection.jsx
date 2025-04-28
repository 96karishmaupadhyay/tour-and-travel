import React, { useEffect, useState } from 'react';
import ScrolCard from './ScrolCard';
import cardsData from "../datafile/data.js"
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
function ScrolSection() {


  const [start, setStart] = useState(0);

  function goLeft() {
    if (start > 0) {
      setStart(start - 1);
      console.log(start)
    }
  }

  function goRight() {
    if (start < cardsData.length - 5) {
      setStart(start + 1);
    }
    console.log(start)
  }

  // useEffect(()=>{
  //   setInterval()
  // },[start])

  return (
    <div className='relative m-10' >
      <h2 className='font-bold text-2xl p-4'>Destinations</h2>
     <div className="left-arrow" >
          <IoIosArrowDropleftCircle  className="text-4xl text-amber-600 " onClick={goLeft}/>
          </div>
          <div className="right-arrow">
          <IoIosArrowDroprightCircle  className="text-4xl text-amber-600 "  onClick={goRight}/>
          </div>
      <div className='flex gap-8 justify-center'>
        {cardsData.slice(start, start + 5).map((card, index) => (
          <ScrolCard key={index} data={card}/>
        ))}
      </div>
      {/* <div className='flex gap-4 justify-center md:hidden'>
        {cardsData.slice(start, start + 3).map((card, index) => (
          <ScrolCard key={index} data={card}/>
        ))}
      </div> */}
    </div>
  );
}

export default ScrolSection;



