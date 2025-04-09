// CircleCard.jsx (Client Component)
'use client';

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation"; 

export default function CircleCard({ icon, alt, text, color, route }) {
    // Routing

    const router = useRouter();
    const pathname = usePathname(); 
    const lang = pathname.startsWith("/en") ? "en" : "es"; 

    const handleRedirect = () => {
        router.push(`/${lang}/${route}`)
    };

    return (
        <div 
            className="circle-card"
            style={{ border: `2px solid ${color}`}}
            onClick={handleRedirect}
        >
            <Image 
                src={icon}
                alt={alt}
                width={80}
                height={80}
                priority
                className="circle-card__icon"
            />
            <p>{text}</p>
        </div>
    );
}