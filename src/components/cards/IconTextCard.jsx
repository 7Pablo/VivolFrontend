// IconTextCard.jsx (Server component)

import Image from "next/image";

export default function IconTextCard({ icon, text }) {
    return (
        <div className="icon-text-card">
            <div className="icon-text-card--image">
                <Image
                    src={icon}
                    alt="Icon text card icon"
                    height={80}
                    width={80}
                />
            </div>
            <p>{text}</p>
        </div>
    );
}
