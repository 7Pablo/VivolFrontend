// OvalCard.js (Server component)

import Image from "next/image";

export default function OvalCard({ icon, alt, title, text, color, listItems  }) {
    return (
        <div className="oval-card">
            <div className="oval-card__image--wrapper" style={{ border: `2px solid ${color}` }}>
                <Image
                    className="oval-card__image"
                    src={icon}
                    alt={alt}
                    height={100}
                    width={100}
                />
            </div>
            <div className="oval-card__body">
                <h2 style={{color: color}}>{title}</h2>
                {listItems ? (
                    <ul>
                        {listItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p>{text}</p> 
                )}
            </div>
        </div>
    );
}
