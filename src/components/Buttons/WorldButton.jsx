// WorldButton.jsx (Client component)
'use client';

import Image from "next/image";

export default function WorldButton({icon, name}) {
    return (
        <div className="world-button">
            <button className="world-button__country">
                <div  className="world-button__country--image">
                    <Image
                        src={icon}
                        alt={`${name} logo`}
                        height={40}
                        width={40}
                    />
                </div>
                <h4>{name}</h4>
            </button>
        </div>
    );
}