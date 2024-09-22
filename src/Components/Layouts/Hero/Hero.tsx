import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./style.css"

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import getKeyboardData from './DemoData';

export default function Hero() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const[activeIndex,setActiveIndex]=useState(0)



const keyboardData=getKeyboardData()

  return (
    <>
      <Swiper
      data-aos="fade-down"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
        onSlideChange={(s)=>setActiveIndex(s.activeIndex)}
      >
        {
            keyboardData?.map((item,idx)=>( <SwiperSlide key={idx}>
               <div key={idx} className='h-[30vh] lg:h-[500px] relative'>
                <div  className={`absolute bottom-0 left-[5%] delay-75 duration-1000 ${activeIndex===idx?"-translate-y-6 lg:-translate-y-14":"translate-y-0"}`}>
                  <h1 className='text-white text-xl lg:text-3xl font-semibold lg:font-bold bg-[#5252526c] w-max py-1 lg:py-4 px-1 lg:px-3 rounded-lg'>{item.name}</h1>
                  <h1 className='text-white mt-2 lg:mt-4 text-base lg:text-xl font-medium lg:font-semibold bg-[#5252526c] w-max py-1 lg:py-4 px-1 lg:px-3 rounded-lg'>{item.status}</h1>
                </div>
                <div className={`absolute top-0 right-[5%] delay-75 duration-1000 ${activeIndex===idx?"lg:translate-y-14 translate-y-6":"translate-y-0"}`}>
                 <img className='lg:w-[100px] object-contain lg:h-[100px] w-[50px] h-[50px] bg-[#5252526c] rounded-lg' src={item.brand} alt="" />
                </div>
                <img  className='h-full  w-full object-cover' src={item.photo} alt="" />
               </div></SwiperSlide>
            ))
        }
       
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
