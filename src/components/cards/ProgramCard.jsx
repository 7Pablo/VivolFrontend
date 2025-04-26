// ProgramCard.jsx (Server component)

import Image from "next/image";

export default function ProgramCard({ icon, title, listItems, color }) {
    return (
        <div className="program-card">
            <div className="program-card__title">
                <h3 style={{color: color}}>{title}</h3>
            </div>
            <div className="program-card__body">
                {
                    <ul>
                        {listItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                }
            </div>
            <div className="program-card__image" style={{ border: `2px solid ${color}` }}>
                <Image 
                    src={icon}
                    alt="card icon"
                    height={150}
                    width={150}
                />
            </div>
        </div>
    );
}