"use client";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper';
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import Image from "next/image";

const HeroHome = () => {
  return (
    <div className="relative mt-20">
      <div className="flex absolute -bottom-5 left-0 w-full z-10 h-12">
        <div className=""></div>
      </div>

      <Swiper
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        autoplay
        loop
        modules={[Navigation, Autoplay]}
        className="mySwiper relative"
      >
        <SwiperSlide>
          {({ isActive }) => (
            <div className="relative">
              <div className="hidden md:block">
                <img
                  src="https://via.placeholder.com/1920x700"
                  alt="Banner desktop"
                  className="relative xl:object-cover xl:w-full 2xl:h-[40rem]"
                />
              </div>
              <div className="md:hidden h-96">
                <img
                  src="https://via.placeholder.com/900x405"
                  alt="Banner mobile"
                  className="relative object-cover h-full w-full"
                />
              </div>
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <div className="relative">
              <div className="hidden md:block">
                <img
                  src="https://via.placeholder.com/1920x700"
                  alt="Banner audiovisual desktop"
                  className="relative xl:object-cover xl:w-full 2xl:h-[40rem]"
                />
              </div>
              <div className="md:hidden h-96">
                <img
                  src="https://via.placeholder.com/900x405"
                  alt="Banner AudioVisual mobile"
                  className="relative object-cover h-full w-full"
                />
              </div>
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <div className="relative">
              <div className="hidden md:block">
                <img
                  src="https://via.placeholder.com/1920x700"
                  alt="Banner  desktop"
                  className="relative xl:object-cover xl:w-full 2xl:h-[40rem]"
                />
              </div>
              <div className="md:hidden h-96">
                <img
                  src="https://via.placeholder.com/900x405"
                  alt="Banner  mobile"
                  className="relative object-cover h-full w-full"
                />
              </div>
            </div>
          )}
        </SwiperSlide>
      </Swiper>
      <div className="absolute h-full w-full flex items-center place-content-between inset-0">
        <div className="prev text-5xl text-zinc-100/50 cursor-pointer relative z-10">
          <RxCaretLeft />
        </div>
        <div className="next text-5xl text-zinc-100/50 cursor-pointer relative z-10">
          <RxCaretRight />
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
