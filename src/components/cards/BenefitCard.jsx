// BenefitCard.jsx (Server component)

import Image from "next/image";

export default function BenefitCard({ icon, title, text, color }) {
    return (
        <div className="benefit-card">
            <div className="benefit-card__wrapper" style={{borderColor: color, borderStyle: 'solid', borderWidth: '2px'}}>
                <Image
                    src={icon}
                    alt="Benefit icon"
                    height={80}
                    width={80}
                />
            </div>
            <div className="benefit-card__text">
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
        </div>
    );
}