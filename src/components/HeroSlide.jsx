import React, { useState } from "react";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
const HeroSlide = () => {
  const heroImages = [hero1, hero2, hero3, hero4];
  const [currentSlide, setCurrentSlide] = useState(0);

  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative">
      
      <div className="relative flex justify-center ">
        <img
          src={heroImages[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          loading="lazy"
          className=" h-[500px] object-cover overflow-x-hidden w-[100%] "
        />
  
      </div>
      <h1 className="hero-text">
   
      Welcome to Tour & Travels
      </h1>
   
      <div className="left-arrow" onClick={prevSlide}>
      <IoIosArrowDropleftCircle  className="text-6xl text-amber-600 "/>
      </div>
      <div className="right-arrow" onClick={nextSlide}>
      <IoIosArrowDroprightCircle  className="text-6xl text-amber-600" />
      </div>
 
  
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2">
        {heroImages.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentSlide === index ? "bg-white" : "bg-amber-600"
            }`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroSlide;
