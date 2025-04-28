// ProcessCard (Server component)

export default function ProcessCard({ number, text, color }) {
    return (
        <div className="process-card">
            <div className="process-card__wrapper" style={{backgroundColor: color}}>
                <div className="process-card__wrapper--overlay">
                    <h3>{number}</h3>
                </div>
            </div>
            <div className="process-card__text">
                <p>{text}</p>
            </div>
        </div>
    );
}