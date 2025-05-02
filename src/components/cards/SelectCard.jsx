// SelectCard.jsx (Client component)
'use client'

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation"; 

export default function SelectCard({ image, alt, title, backGroundColor, textColor, route, position }) {
    // Routing
    const router = useRouter();
    const pathname = usePathname(); 
    const lang = pathname.startsWith("/en") ? "en" : "es"; 

    const handleRedirect = () => {
        router.push(`/${lang}/${route}`)
    };

    return (
        <div 
            className="select-card" 
            onClick={handleRedirect}
            style={{ backgroundColor: backGroundColor }}
        >
            <div className="select-card__image">
                <Image
                    src={image}
                    alt={alt}
                    fill
                    style={{ objectFit: 'cover', objectPosition: position }}
                />
            </div>
            <div className="select-card__text">
                <h3 style={{ color: textColor }}>{title}</h3>
            </div>
        </div>
    );
}