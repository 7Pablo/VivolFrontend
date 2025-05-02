// page.js (Family Page/ Server component) 

import Image from "next/image";
import { getTranslations } from "locales/translations";

export default async function FamilyPage(props) {
  const params = await props.params;
  const lang = params?.lang || 'es'; 
  const trans = await getTranslations(lang);

  return (
    <div className="family-page">

      {/* Intro */}
      <div className="family-page__intro">
        <Image
          src="/images/photos/vivol-unida.jpg"
          alt={trans?.alt?.involve_image2 || "Volunteer with their host family"}
          fill
          style={{ objectFit: 'cover', objectPosition: '50% 60%' }}
          priority
        />
        <div className="family-page__intro--overlay">
          <div className="family-page__intro--text">
            <h1>{trans.family_page.title}</h1>
            <p>{trans.family_page.intro_text}</p>
          </div>
        </div>
      </div>

      {/* Question */}
      <div className="family-page__question">

      </div>

      {/* Meaning */}

      {/* Middle */}

      {/* Benefits */}

      {/* Join */}

    </div>
  );
}