// Slider.jsx (Client side)
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import WideCard from "@/components/cards/WideCard";
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Slider({ slides }) {
    return (
        <div className='slider'>
            <Swiper
                modules={[Autoplay, Navigation, Pagination]} // Enabling autoplay, navigation, and pagination
                spaceBetween={10} // No space between slides 
                slidesPerView={1} // Only 1 slide is shown at a time
                loop={true} // Loops indefinitely
                autoplay={{
                    delay: 8000, //Change slide every 3 seconds
                    disableOnInteraction: true,
                }}
                navigation={{
                    nextEl: '.slider__button--next',  
                    prevEl: '.slider__button--prev',  
                }}
                pagination={{ clickable: true }}
            >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <WideCard
                        imgSrc={slide.imgSrc}
                        imgAlt={slide.imgAlt}
                        name={slide.name}
                        body={slide.body}
                    />
                </SwiperSlide>
            ))}
            </Swiper>
            <div className="slider__button--prev">
                <ChevronLeft size={32} />
            </div>
            <div className="slider__button--next">
                <ChevronRight size={32} /> 
            </div>
        </div>
    );
}