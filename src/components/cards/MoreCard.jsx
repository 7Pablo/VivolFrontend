'use client';

import Image from "next/image";
import { CircleArrowRight } from "lucide-react";
import { useRouter, usePathname } from "next/navigation"; 
import { useState, useEffect } from "react";
import { getTranslations } from "locales/translations";

export default function MoreCard({ imgSrc, imgAlt, imgText, imgPosition, title, bodyText, color, route }) {
    // Routing
    const router = useRouter();
    const pathname = usePathname(); 
    const lang = pathname.startsWith("/en") ? "en" : "es"; 

    const handleRedirect = () => {
        router.push(`/${lang}/${route}`)
    };

    // Translations
    const [translations, setTranslations] = useState(null);

    useEffect(() => {
        const fetchTranslations = async () => {
            const trans = await getTranslations(lang);
            setTranslations(trans);
        };

        fetchTranslations();
    }, [lang]);
    
    return (
        <div className="more-card"
            onClick={handleRedirect}
        >
            <div className="more-card__image-wrapper">
                <Image
                    src={imgSrc}
                    alt={imgAlt}
                    priority
                    className="more-card__image"
                    width={300}
                    height={300}
                    quality={100}
                    style={{
                        objectPosition: imgPosition || "center center",
                    }}
                />
                <div className="more-card__image--text" style={{ backgroundColor: color }}>
                    {imgText}
                </div>
            </div>
            <div className="more-card__content">
                <h2 className="more-card__title">{title}</h2>
                <p className="more-card__body">{bodyText}</p>
            </div>
            {translations ? (
                <div className="more-card__button">
                    <CircleArrowRight color={color} />
                    <p style={{ color: color }}>{translations.home_page.learn_more}</p>
                </div>
            ) : null}
        </div>
    );
}
