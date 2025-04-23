import Image from "next/image";

function SimpleCard({ icon, title, text, size = 100}) {
    return (
        <div className="simple-card">
            <div className="simple-card__icon">
                <Image 
                    src={icon}
                    alt="Simple card icon"
                    height={size}
                    width={size}
                />
            </div>
            <div className="simple-card__text">
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default SimpleCard;