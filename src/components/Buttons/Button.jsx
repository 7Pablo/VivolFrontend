// Button.jsx (Client component)
'use client';

import { useRouter, usePathname } from "next/navigation"; 

export default function Button({
    type = "primary",
    route,
    children,
}) {

    // Routing
    const router = useRouter();
    const pathname = usePathname(); 
    const lang = pathname.startsWith("/en") ? "en" : "es"; 

    const handleRedirect = () => {
        router.push(`/${lang}/${route}`)
    };
    
    return (
        <button 
            className={`button--${type}`}
            onClick={handleRedirect}
        >
            {children}
        </button>
    );
}