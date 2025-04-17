// DoubleButton.jsx (Client component)
'use client';

import { useRouter, usePathname } from "next/navigation"; 

export default function DoubleButton({ routeRight, routeLeft, textRight, textLeft }) {
    // Routing
    const router = useRouter();
    const pathname = usePathname(); 
    const lang = pathname.startsWith("/en") ? "en" : "es"; 
    
    const redirectLeft = () => {
        router.push(`/${lang}/${routeLeft}`)
    };

    const redirectRight = () => {
        router.push(`/${lang}/${routeRight}`)
    };
    
    return (
        <div className="double-button">
            <button 
                className="double-button__left"
                onClick={redirectLeft}
            >
                <p>{textLeft}</p>
            </button>
            <button
                className="double-button__right"
                onClick={redirectRight}
            >
                <p>{textRight}</p>
            </button>
        </div>
    );
}