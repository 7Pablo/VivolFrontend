'use client';

import Image from "next/image";

export default function FooterContact({ src, text, type, medium }) {
    const defaultMessage = "Hola, estoy interesado en su programa de voluntariado.";

    const emailSubject = "Interés en Voluntariado";
    const emailBody = `Hola,\n\n${defaultMessage}\n\nSaludos,\n[Tu Nombre]`;

    const whatsappLink = `https://wa.me/${medium}?text=${encodeURIComponent(defaultMessage)}`;
    const emailLink = `mailto:${medium}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    const messageLink = type === "whatsapp" ? whatsappLink : type === "email" ? emailLink : "#";

    return (
        <a 
            className="footer__contact--item"
            href={messageLink}
            target="_blank" 
            rel="noopener noreferrer"
        >
            <Image 
                src={src}
                alt="Vivol WhatsApp"
                width={30}
                height={30}
                priority
            />
            <p className="footer__contact--item-text">
                {text}
            </p>
        </a>
    );
}
