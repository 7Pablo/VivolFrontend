// MemberCard.jsx (Server Component)

import Image from "next/image";

export default function MemberCard({ src, name, role, phrase }) {
    return (
        <div className="member-card">
            <Image
                className="member-card__image"
                src={src}
                alt={name}
                width={100}
                height={100}
            />
            <div className="member-card__title">
                <h4 className="member-card__name">{name}</h4>
                <h4 className="member-card__role">{role}</h4>
            </div>
            <p>{phrase}</p>
        </div>
    );
}
