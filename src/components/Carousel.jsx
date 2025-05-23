// Carousel.jsx (Client component)
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules'; 
import Image from 'next/image';
import Button from './buttons/Button';
import { getAssetPath } from '@/utils/getAssetPath';

export default function Carousel({ imageLinks, translations }) {
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
                                fill
                                style={{ objectFit: 'cover', objectPosition: image.position || "center center" }}
                                quality={100}
                                priority
                            />
                        </div>
                    </div>
                </SwiperSlide>
            ))}
            </Swiper>
            <div className='carousel__overlay'>
                <div className='carousel__content'>
                    <div className='carousel__content-left'>
                        <h1>{translations.home_page.title}</h1>
                        <Button 
                            type='secondary'
                            route="contact"
                            children={translations.button.carousel}
                        />
                    </div>
                    <div className='carousel__content-right'>
                        <Image
                            src={getAssetPath("/images/icons/logo-blanco.png")}
                            alt="Logo de Vivol, Vida y Voluntariado"
                            width={1000}
                            height={1000}
                            priority
                            className="carousel__logo--world"
                        />
                        <div className="carousel__logo--text">
                            <h2 className="carousel__logo--text-title">VIVOL</h2>
                            <h3 className="carousel__logo--text-subtitle">Vida y Voluntariado</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}