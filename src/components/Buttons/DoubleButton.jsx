// DoubleButton.jsx (Client component)
'use client';

import { useRouter, usePathname } from "next/navigation"; 
import AnimatedSection from "@/utils/AnimatedSection";

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
            <AnimatedSection animation="slideFromLeft" delay={0.2} className="animated-section"> 
                <button
                    className="double-button__left"
                    onClick={redirectLeft}
                >
                    <p>{textLeft}</p>
                </button>
            </AnimatedSection>
            <AnimatedSection animation="slideFromRight" delay={0.2} className="animated-section"> 
                <button
                    className="double-button__right"
                    onClick={redirectRight}
                >
                    <p>{textRight}</p>
                </button>
            </AnimatedSection>
        </div>
    );
}