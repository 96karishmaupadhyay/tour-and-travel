// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ScrolCard from './ScrolCard';

const SwiperSlides = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={20}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><ScrolCard/></SwiperSlide>
      <SwiperSlide><ScrolCard/></SwiperSlide>
      <SwiperSlide><ScrolCard/></SwiperSlide>
      <SwiperSlide><ScrolCard/></SwiperSlide>
    
    </Swiper>
  );
};

export default SwiperSlides