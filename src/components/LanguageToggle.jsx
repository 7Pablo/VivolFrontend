"use client";

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";

function LanguageToggle() {
    const pathname = usePathname();
    const currentLang = pathname.startsWith("/en") ? "en" : "es";
    const toggleLang = currentLang === "en" ? "es" : "en";
    const newHref = pathname.replace(`/${currentLang}`, `/${toggleLang}`);

    const [isToggled, setIsToggled] = useState(currentLang === "en");

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div className='toggle__container'>
            <Image
                src="/images/espanol.svg"
                alt="Logo de español"
                width={30}
                height={30}
                priority
                className="navbar__logo--world"
            />
            <Link href={newHref} prefetch={false}>
            <div
                className={`toggle ${isToggled ? "toggled" : ""}`}
                onClick={handleToggle}
            >
                <button className={`toggle__button ${isToggled ? "toggled" : ""}`}></button>
            </div>
            </Link>
            <Image
                src="/images/ingles.svg"
                alt="Logo de ingles"
                width={30}
                height={30}
                priority
                className="navbar__logo--world"
            />
        </div>
    );
}

export default LanguageToggle;
