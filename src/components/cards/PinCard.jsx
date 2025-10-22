//  PinCard.jsx (Client component)
'use client';

import { getAssetPath } from "@/utils/getAssetPath";
import Image from "next/image";

export default function PinCard({ icon, text, color, doc }) {

    const handleRedirect = () => {
        window.open(doc, '_blank'); 
    };

    return (
        <div 
            className="pin-card"
            onClick={handleRedirect}
            style={{ backgroundColor: color }}
        >
            <div className="pin-card__pin">
                <Image
                    src={getAssetPath('/images/icons/red-pin.png')}
                    alt="Pin card icon"
                    height={80}
                    width={80}
                />
            </div>
            <div className="pin-card__image">
                <Image
                    src={icon}
                    alt="Pin card icon"
                    height={500}
                    width={500}
                />
            </div>
            <h4>{text}</h4>
        </div>
    );
}