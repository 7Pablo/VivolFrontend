// CreditsCard.jsx (Server component)

import Image from "next/image";
import { getAssetPath } from "@/utils/getAssetPath";

export default function CreditsCard({imgSrc, title, name, email, linkedin, number, github}) {
    return (
        <div className="credits-card">
            <div className="credits-card__image">
                <Image
                    src={imgSrc}
                    alt={name || "Juan Pablo Armendáriz"}
                    fill
                    style={{ objectFit: "cover" }}
                    quality
                />
            </div>
            <h4>{title}</h4>
            <h5>{name}</h5>
            <div className="credits-card__content">
                <div className="credits-card__content--info">
                    <Image
                        src={getAssetPath("/images/icons/mail-blue.svg")}
                        alt="Mail icon"
                        height={30}
                        width={30}
                    />
                    <p>{email}</p>
                </div>
                <div className="credits-card__content--info">
                    <Image
                        src={getAssetPath("/images/icons/linkedin.svg")}
                        alt="Linkedin icon"
                        height={30}
                        width={30}
                    />
                    <a  href={linkedin} target="_blank" rel="noopener noreferrer">
                        {linkedin}
                    </a>
                </div>
                <div className="credits-card__content--info">
                    <Image
                        src={getAssetPath("/images/icons/phone-blue.svg")}
                        alt="Phone icon"
                        height={30}
                        width={30}
                    />
                    <p>{number}</p>
                </div>
                <div className="credits-card__content--info">
                    <Image
                        src={getAssetPath("/images/icons/github.svg")}
                        alt="Github icon"
                        height={30}
                        width={30}
                    />
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        {github}
                    </a>
                </div>
            </div>
        </div>
    );
}