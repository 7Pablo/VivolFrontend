// WideCard.jsx (Server Component)

import Image from "next/image";

export default function WideCard({ imgSrc, imgAlt, name, body, position }) {
    return (
        <div className="wide-card">
            <div className="wide-card__wrapper">
                <Image
                    className="wide-card__image"
                    src={imgSrc}
                    alt={imgAlt}
                    fill
                    style={{ objectFit: 'cover', objectPosition: position || "center center" }}
                    quality={100}
                />
            </div>
            <div className="wide-card__body">
                <h4>{name}</h4>
                <p>{body}</p>
            </div>
        </div>
    );
}
