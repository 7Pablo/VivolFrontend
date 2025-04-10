// Carousel.jsx (Client component)
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules'; 
import Image from 'next/image';
import Button from './buttons/Button';
import { useRouter, usePathname } from "next/navigation"; 
import { useState, useEffect } from "react";
import { getTranslations } from "locales/translations";

export default function Carousel({ imageLinks }) {
    const router = useRouter();
    const pathname = usePathname(); 
    const lang = pathname.startsWith("/en") ? "en" : "es"; 
    
    // Translations
    const [translations, setTranslations] = useState(null);

    useEffect(() => {
        const fetchTranslations = async () => {
            const trans = await getTranslations(lang);
            setTranslations(trans);
        };

        fetchTranslations();
    }, [lang]);

    const handleRedirect = () => {
        router.push(`/${lang}/contact`)
    };

    if (!translations) {
        return <div></div>;
    }

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
                            onClick={handleRedirect}
                            children={translations.button.carousel}
                        />
                    </div>
                    <div className='carousel__content-right'>
                        <Image
                            src="/images/icons/logo-blanco.svg"
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