// ProjectCard.jsx (Server component)

import Image from "next/image";
import Button from "../buttons/Button";
import { getTranslations } from "locales/translations";

export default async function ProjectCard(props) {
    const { image, alt, title, quote, name, color } = props;

    const params = await props.params;
    const lang = params?.lang || 'es'; 
    const trans = await getTranslations(lang);

    return (
        <div className="project-card" style={{ '--shadow-color': color }}>
            <div className="project-card__image">
                <Image
                    src={image}
                    alt={alt}
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className="project-card__text">
                <h1>{title}</h1>
                <h4>{quote}</h4>
                <p>{name}</p>
            </div>
            <Button 
                route="contact"
                children={trans.button.carousel}
            />
        </div>
    );
}
