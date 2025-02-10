"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

const events = [
    {
        title: "UI/UX Workshop",
        description: "From Ideas to Interfaces: A hands-on UI/UX workshop by Divya Maurya, Experience Designer & Specialist at LTIMindtree. Learn design principles, wireframing, and prototyping.",
        image: "/assets/UIUX WorkShop Banner and PPT.png" 
    },
    {
        title: "React Workshop",
        description: "Master React fundamentals and build interactive UIs with this hands-on workshop.",
        image: "/assets/UIUX WorkShop Banner and PPT.png" 
    },
    {
        title: "Python for Data Science",
        description: "Explore data manipulation, visualization, and machine learning using Python.",
        image: "/assets/UIUX WorkShop Banner and PPT.png" 
    },
    {
        title: "Angular Workshop",
        description: "Deep dive into Angular framework and create powerful, scalable web applications.",
        image: "/assets/UIUX WorkShop Banner and PPT.png" 
    }
];

const PastEvent = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div id="pastevent" className="container mt-20">
            <div className="text-center mb-10">
                <h1 className="text-8xl font-bold text-gray-900">Past Events</h1>
                <h2 className="text-xl text-gray-700 mt-2">Explore our recent workshops and tech events.</h2>
            </div>

            <div className="container mx-auto px-10 flex flex-col md:flex-row items-center gap-10">
                {/* Left Side: Event Description */}
                <div className="w-full md:w-2/5">
                    <h1 className="text-4xl font-bold mb-4 leading-snug text-gray-900">{events[activeIndex].title}</h1>
                    <p className="text-lg text-gray-700">{events[activeIndex].description}</p>
                </div>

                {/* Right Side: Swiper Carousel */}
                <div className="w-full md:w-3/5 flex justify-center">
                    <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        loop={true}
                        modules={[EffectCards, Autoplay]}
                        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: false }}
                        className="w-[650px] h-[500px]"
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    >
                        {events.map((event, index) => (
                            <SwiperSlide 
                                key={index} 
                                className="flex flex-col items-center bg-white/30 backdrop-blur-lg shadow-lg p-6 rounded-2xl text-white border border-white/20"
                            >
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-[600px] h-[400px] object-contain rounded-lg shadow-md"
                                />
                                <h2 className="text-3xl text-black font-semibold text-center mt-4 drop-shadow-md">{event.title}</h2>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default PastEvent;
