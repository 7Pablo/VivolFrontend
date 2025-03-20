// FooterContact (Client component)
'use client';

import Image from "next/image";

export default function FooterContact({ src, text }) {
    return (
        <div className="footer-contact">
            <Image 
                src={src}
                alt="Vivol WhatsApp"
                width={30}
                height={30}
                priority
            />
            <p className="footer-contact--text">
                {text}
            </p>
        </div>
    );
}