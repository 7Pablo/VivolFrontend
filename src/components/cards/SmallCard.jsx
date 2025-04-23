// SmallCard.jsx (Server component)

import Image from "next/image";

export default function SmallCard({ icon, title, text, color }) {
    return (
        <div className="small-card">
            <div className="small-card__icon">
                <Image
                    src={icon}
                    alt="Small card icon"
                    height={80}
                    width={80}
                />
            </div>
            <div className="small-card__text">
                <h3 style={{color: color}}>
                    {title}
                </h3>
                <p>{text}</p>
            </div>
        </div>
    );
}
