"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

const slides = [
  {
    title: "Workshop Event",
    imageUrl: "/assets/WorkshopBanner.png",
  },
  {
    title: "Neon Lights",
    imageUrl: "/assets/WorkshopBanner.png",
  },
  {
    title: "Cyberpunk Streets",
    imageUrl: "/assets/WorkshopBanner.png",
  },
  {
    title: "Holographic Interface",
    imageUrl: "/assets/WorkshopBanner.png",
  },
  {
    title: "AI Robotics",
    imageUrl: "/assets/WorkshopBanner.png",
  },
];

const StackedCarousel = () => {
  const [swiper, setSwiper] = useState(null);

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        className="w-full aspect-[16/9] rounded-lg shadow-xl overflow-hidden"
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSwiper={setSwiper}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="rounded-xl shadow-lg overflow-hidden">
            <div className="relative w-full h-full">
              <Image
                src={slide.imageUrl || "/placeholder.svg"}
                alt={slide.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold">{slide.title}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center z-10 px-4 sm:px-6 -translate-y-1/2">
        <button
          onClick={() => swiper?.slidePrev()}
          className="text-white p-2 rounded-full transition-all duration-300 ease-in-out focus:outline-none"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => swiper?.slideNext()}
          className="text-white p-2 rounded-full transition-all duration-300 ease-in-out focus:outline-none"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

const PastEvent = () => {
  return (
    <div className="min-h-screen text-white py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 lg:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Past Events
        </h1>
        <StackedCarousel />
      </div>
    </div>
  );
};

export default PastEvent;
