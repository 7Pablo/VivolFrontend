// CountryInfo.jsx (Client component)

import Image from "next/image";

export default function CountryInfo({ icon, title, text }) {

    return (
        <div className="country-info">
            <Image
                src={icon}
                alt="Country info icon"
                height={35}
                width={35}
            />
            <div className="country-info__text">
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    );
}