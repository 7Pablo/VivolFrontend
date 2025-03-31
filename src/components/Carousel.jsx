// Carousel.jsx (Client component)
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules'; 
import Image from 'next/image';
import Button from './buttons/Button';

export default function Carousel({ imageLinks }) {
    return (
        <div className='carousel'>
            <Swiper
                modules={[Autoplay]} // Enabling autoplay
                spaceBetween={0} // No space between slides 
                slidesPerView={1} // Only 1 slide is shown at a time\
                loop={true} // Loops indefinitely
                autoplay={{
                    delay: 8000, //Change slide every 3 seconds
                    disableOnInteraction: false,
                }}
            >
            {imageLinks.map((image, index) => (
                <SwiperSlide key={index}>
                    <div className="carousel__slide">
                        <div className="carousel__slide--image">
                        <Image
                            src={image.src}  
                            alt={image.alt}  
                            layout="fill"
                            objectFit="cover"
                            objectPosition={image.position || "center center"}
                            quality={100}
                        />
                        </div>
                    </div>
                </SwiperSlide>
            ))}
            </Swiper>
            <div className='carousel__overlay'>
                <div className='carousel__content'>
                    <div className='carousel__content-left'>
                        <h1>Voluntariado internacional</h1>
                        <Button />
                    </div>
                    <div className='carousel__content-right'>
                        <Image
                            src="/images/logo-blanco.svg"
                            alt="Logo de Vivol, Vida y Voluntariado"
                            width={45}
                            height={45}
                            priority
                            className="carousel__logo--world"
                        />
                            <div className="carousel__logo--text">
                            <h1 className="carousel__logo--text-title">VIVOL</h1>
                            <h2 className="carousel__logo--text-subtitle">Vida y Voluntariado</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}