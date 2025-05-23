// page.js (Family Page/ Server component) 

import Image from "next/image";
import { getTranslations } from "locales/translations";
import BenefitCard from "@/components/cards/BenefitCard";
import Button from "@/components/buttons/Button";
import { getAssetPath } from "@/utils/getAssetPath";

// Metadata
export async function generateMetadata({ params }) {

  // Translations
  const { lang } = await params;
  const trans = await getTranslations(lang);

  // Canonical
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const path = `/${lang}/involve/family`; 
  const canonicalUrl = `${baseUrl}${path}`;
  
  return {
    title: trans.metadata?.family.title || 'Sé una familia anfitriona – Vivol',
    description: trans.metadata?.family.description || 'Abre tu hogar a voluntarios internacionales y vive un intercambio cultural enriquecedor.',
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

// FamilyPage
export default async function FamilyPage(props) {
  const params = await props.params;
  const lang = params?.lang || 'es'; 
  const trans = await getTranslations(lang);

  return (
    <div className="family-page">

      {/* Intro */}
      <div className="family-page__intro">
        <Image
          src={getAssetPath("/images/photos/vivol-unida.webp")}
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
            src={getAssetPath("/images/photos/vivol-navidad.webp")}
            alt={trans?.alt?.family_image1 || "Volunteers sharing with host family at Christmas"}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Meaning */}
      <div className="family-page__meaning">
        <Image
          src={getAssetPath("/images/photos/peru-calles.webp")}
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
            src={getAssetPath("/images/photos/vivol-pico.webp")}
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
            icon={getAssetPath("/images/icons/culture.svg")}
            title={trans.family_page.benefits_language}
            color="#85AF59"
            short={true}
          />
          <BenefitCard 
            icon={getAssetPath("/images/icons/brain.svg")}
            title={trans.family_page.benefits_culture}
            color="#E1BD2A"
            short={true}
          />
          <BenefitCard 
            icon={getAssetPath("/images/icons/perspective.svg")}
            title={trans.family_page.benefits_perspective}
            color="#1583F0"
            short={true}
          />
          <BenefitCard 
            icon={getAssetPath("/images/icons/holding.svg")}
            title={trans.family_page.benefits_learning}
            color="#D53686"
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
            >
              {trans.button.contact_simple}
            </Button>
          </div>
        </div>
      </div>

    </div>
  );
}

export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'es' },
  ];
}