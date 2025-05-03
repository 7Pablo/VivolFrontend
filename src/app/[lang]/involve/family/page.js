// page.js (Family Page/ Server component) 

import Image from "next/image";
import { getTranslations } from "locales/translations";
import BenefitCard from "@/components/cards/BenefitCard";
import Button from "@/components/buttons/Button";

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
        <div className="family-page__question--text">
          <h3>{trans.family_page.question_question}</h3>
          <p>{trans.family_page.question_text}</p>
        </div>
        <div className="family-page__question--image">
          <Image 
            src="/images/photos/vivol-navidad.JPG"
            alt={trans?.alt?.family_image1 || "Volunteers sharing with host family at Christmas"}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Meaning */}
      <div className="family-page__meaning">
        <Image
          src="/images/photos/peru-calles.jpg"
          alt="Streets Peru"
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="family-page__meaning--overlay">
          <h3>{trans.family_page.meaning_title}</h3>
          <div className="family-page__meaning--card">
            <p>{trans.family_page.meaning_text.top}</p>
            <ul>
              <li>{trans.family_page.meaning_text.bullet1}</li>
              <li>{trans.family_page.meaning_text.bullet2}</li>
              <li>{trans.family_page.meaning_text.bullet3}</li>
              <li>{trans.family_page.meaning_text.bullet4}</li>
              <li>{trans.family_page.meaning_text.bullet5}</li>
              <li>{trans.family_page.meaning_text.bullet6}</li>
              <li>{trans.family_page.meaning_text.bullet7}</li>
              <li>{trans.family_page.meaning_text.bullet8}</li>
              <li>{trans.family_page.meaning_text.bullet9}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Middle */}
      <div className="family-page__middle">
        <div className="family-page__middle--image">
          <Image 
            src="/images/photos/vivol-pico.jpg"
            alt={trans?.alt?.family_image2 || "Volunteer with host family on a rock"}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <p>{trans.family_page.middle_text}</p>
      </div>

      {/* Benefits */}
      <div className="family-page__benefits">
        <h3>{trans.family_page.benefits_title}</h3>
        <div className="family-page__benefits--cards">
          <BenefitCard 
            icon="/images/icons/culture.svg"
            title={trans.family_page.benefits_language}
            color="#00BF4C"
            short={true}
          />
          <BenefitCard 
            icon="/images/icons/brain.svg"
            title={trans.family_page.benefits_culture}
            color="#FFDE59"
            short={true}
          />
          <BenefitCard 
            icon="/images/icons/perspective.svg"
            title={trans.family_page.benefits_perspective}
            color="#1683F0"
            short={true}
          />
          <BenefitCard 
            icon="/images/icons/holding.svg"
            title={trans.family_page.benefits_learning}
            color="#B490F0"
            short={true}
          />
        </div>
      </div>

      {/* Join */}
      <div className="family-page__join">
        <h3>{trans.family_page.join_title}</h3>
        <div className="family-page__join--bottom">
          <p>{trans.family_page.join_text}</p>
          <div className="family-page__join--contact">
            <p>{trans.family_page.join_contact}</p>
            <Button 
              type='secondary'
              route="contact"
              children={trans.button.contact}
            />
          </div>
        </div>
      </div>

    </div>
  );
}