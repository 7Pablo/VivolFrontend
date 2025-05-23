// NavbarButton.jsx (Client component)
'use client';

import { useRouter, usePathname } from "next/navigation"; 
import Image from "next/image";
import { getAssetPath } from "@/utils/getAssetPath";

export default function NavbarButton() {
    // Routing
    const router = useRouter();
    const pathname = usePathname(); 
    const lang = pathname.startsWith("/en") ? "en" : "es"; 

    const handleRedirect = () => {
        router.push(`/${lang}`)
    };

    return (
        <div className="navbar-button">
            <div className="navbar__logo" onClick={handleRedirect}>
                <Image
                    src={getAssetPath("/images/icons/logo-azul.png")}
                    alt="Logo"
                    priority
                    width={140}
                    height={140}   
                    style={{ objectFit: "contain" }}
                />
            </div>
        </div>
    );
}
