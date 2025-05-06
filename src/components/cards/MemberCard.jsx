// MemberCard.jsx (Server Component)

import Image from "next/image";

export default function MemberCard({ src, name, role, phrase, position="center" }) {
    return (
        <div className="member-card">
            <div className="member-card__image">
                <Image
                    src={src}
                    alt={name}
                    fill
                    style={{ objectFit: 'cover', objectPosition: position }}
                />
            </div>
            <div className="member-card__title">
                <h4 className="member-card__name">{name}</h4>
                <h4 className="member-card__role">{role}</h4>
            </div>
            <p>{phrase}</p>
        </div>
    );
}
