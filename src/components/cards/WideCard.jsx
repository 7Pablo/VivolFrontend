// WideCard.jsx (Server Component)

import Image from "next/image";

export default function WideCard({ imgSrc, imgAlt, name, body }) {
    return (
        <div className="wide-card">
            <div className="wide-card__wrapper">
                <Image
                    className="wide-card__image"
                    src={imgSrc}
                    alt={imgAlt}
                    priority
                    layout="fill"
                    objectFit="cover"
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
