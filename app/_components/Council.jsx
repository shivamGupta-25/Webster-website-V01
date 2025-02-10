'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";

const councilMembers = [
    {
        name: "Shivani Singh",
        role: "President",
        image: "/assets/My pic.jpg",
        linkedin: "https://www.linkedin.com/in/"
    },
    {
        name: "Manish Pathak",
        role: "Vice-President",
        image: "/assets/My pic.jpg",
        linkedin: "https://www.linkedin.com/in/"
    },
    {
        name: "Jai Solanki",
        role: "Vice-President",
        image: "/assets/My pic.jpg",
        linkedin: "https://www.linkedin.com/in/"
    },
    {
        name: "Shivam Raj Gupta",
        role: "Teachnical Head",
        image: "/assets/My pic.jpg",
        linkedin: "https://www.linkedin.com/in/"
    },
    {
        name: "Keshav",
        role: "Creative Head",
        image: "/assets/My pic.jpg",
        linkedin: "https://www.linkedin.com/in/"
    },
    {
        name: "Prateek",
        role: "Pr & Social Media Head",
        image: "/assets/My pic.jpg",
        linkedin: "https://www.linkedin.com/in/"
    },
    {
        name: "Gaurav",
        role: "Pr & Social Media Head",
        image: "/assets/My pic.jpg",
        linkedin: "https://www.linkedin.com/in/"
    }
];

const Council = () => {
    return (
        <>
            <div id="council" className="container mt-20">
                <div className="flex justify-center py-18">
                    <h1 className="text-7xl font-bold text-gray-900">Council</h1>
                </div>
                <div className="flex flex-col items-center py-12">
                    <Swiper
                        modules={[Autoplay, EffectCoverflow]}
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={1}
                        spaceBetween={70}
                        loop={true}
                        coverflowEffect={{
                            rotate: 20,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 4 }
                        }}
                        className="w-full max-w-6xl flex justify-center"
                    >
                        {councilMembers.map((member, index) => (
                            <SwiperSlide key={index} className="flex justify-center">
                                <Card className="w-[250px] overflow-hidden shadow-lg">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={400}
                                        height={400}
                                    />
                                    <CardContent className="p-3 text-center">
                                        <h1 className="text-xl font-bold mb-1">{member.name}</h1>
                                        <p className="text-sm text-gray-600 mb-2">{member.role}</p>
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block text-blue-500 hover:text-blue-700"
                                        >
                                            <Linkedin size={24} />
                                        </a>
                                    </CardContent>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default Council;