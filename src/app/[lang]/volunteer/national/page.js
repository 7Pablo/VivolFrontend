// page.js (National Volunteer Page/Server component)

import ProjectCard from "@/components/cards/ProjectCard";
import SimpleCard from "@/components/cards/SimpleCard";
import SmallCard from "@/components/cards/SmallCard";
import Image from "next/image";
import { getTranslations } from "locales/translations";
import { getAssetPath } from "@/utils/getAssetPath";
import AnimatedSection from "@/utils/AnimatedSection";

// Metadata
export async function generateMetadata({ params }) {

  // Translations
  const { lang } = await params;
  const trans = await getTranslations(lang);

  // Canonical
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const path = `/${lang}/volunteer/national`; 
  const canonicalUrl = `${baseUrl}${path}`;
  
  return {
    title: trans.metadata?.national.title || 'Voluntariado en Perú – Vivol',
    description: trans.metadata?.national.description || 'Voluntarios internacionales: Descubran Perú y contribuyan a proyectos locales con impacto.',
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

// NationalPage
export default async function NationalPage(props) {
  const params = await props.params;
  const lang = params?.lang || 'es'; 
  const trans = await getTranslations(lang);
  
  return (
    <div className="national-page">

      {/* Intro */}
      <div className="national-page__intro">
        <Image
          src={getAssetPath("/images/photos/vivol-paleta.webp")}
          alt={trans?.alt?.national_image1 || "Volunteer with paddles"}
          fill
          style={{ objectFit: 'cover', objectPosition: '50% 35%' }}
          priority
        />
        <div className="national-page__intro--overlay">
          <div className="national-page__intro--text">
            <AnimatedSection animation="slideFromLeft" delay={0.2}> 
              <h1>{trans.national_page.title}</h1>
            </AnimatedSection>
            <AnimatedSection animation="slideFromLeft" delay={0.4}> 
              <p>{trans.national_page.intro_text}</p>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="national-page__info">
        <div className="national-page__info--image">
          <AnimatedSection animation="elegantReveal" delay={0.2} className="animated-section"> 
            <Image
              src={getAssetPath("/images/photos/peru.webp")}
              alt={trans?.alt?.peru_flag || "Peru flag"}
              height={500}
              width={500}
              priority
            />
          </AnimatedSection>
        </div>
        <div className="national-page__info--cards">
          <div className="national-page__info--cards-top">
            <AnimatedSection animation="waveRise" delay={0.2}> 
              <SmallCard
                icon={getAssetPath("/images/icons/pin.svg")}
                title={trans.national_page.capital_title}
                text={trans.national_page.capital_text}
                color="#85AF59"
              />
            </AnimatedSection>
            <AnimatedSection animation="waveRise" delay={0.4}> 
              <SmallCard
                icon={getAssetPath("/images/icons/hollow-world.svg")}
                title={trans.national_page.language_title}
                text={trans.national_page.language_text}
                color="#D53686"
              />
            </AnimatedSection>
          </div>
          <div className="national-page__info--cards-bottom">
            <AnimatedSection animation="waveRise" delay={0.6}> 
              <SmallCard
                icon={getAssetPath("/images/icons/bank.svg")}
                title={trans.national_page.government_title}
                text={trans.national_page.government_text}
                color="#E1BD2A"
              />
            </AnimatedSection>
            <AnimatedSection animation="waveRise" delay={0.8}> 
              <SmallCard
                icon={getAssetPath("/images/icons/coin.svg")}
                title={trans.national_page.currency_title}
                text={trans.national_page.currency_text}
                color="#1583F0"
              />
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Geography */}
      <div className="national-page__geography">
        <div className="national-page__geography--image">
          <Image
            src={getAssetPath("/images/photos/rio.webp")}
            alt="Mountain Peru"
            fill
            style={{ objectFit: 'cover', objectPosition: '40% 50%' }}
            quality={100}
          />
        </div>
        <div className="national-page__geography--overlay">
          <AnimatedSection animation="fadeUp" delay={0.2}>
            <div className="national-page__geography--text">
              <h3>{trans.national_page.geography_title}</h3>
              <p>{trans.national_page.geography_text}</p>
            </div>
          </AnimatedSection>
          <div className="national-page__geography--cards">
            <AnimatedSection animation="flipCard" delay={0.2}>
              <SimpleCard
                icon={getAssetPath("/images/icons/costa.svg")}
                title={trans.national_page.cards.card_title1}
                text={trans.national_page.cards.card_text1}
                size={115}
              />
            </AnimatedSection>
            <AnimatedSection animation="flipCard" delay={0.4}>
              <SimpleCard
                icon={getAssetPath("/images/icons/sierra.svg")}
                title={trans.national_page.cards.card_title2}
                text={trans.national_page.cards.card_text2}
                size={150}
              />
            </AnimatedSection>
            <AnimatedSection animation="flipCard" delay={0.6}>
              <SimpleCard
                icon={getAssetPath("/images/icons/amazonia.svg")}
                title={trans.national_page.cards.card_title3}
                text={trans.national_page.cards.card_text3}
                size={100}
              />
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Reason */}
      <AnimatedSection animation="coinFlip" delay={0.2}>
        <div className="national-page__reason">
          <div className="national-page__reason--left">
            <h3>{trans.national_page.reason_question1}</h3>
            <ul>
              <li>{trans.national_page.reasons1.bullet1}</li>
              <li>{trans.national_page.reasons1.bullet2}</li>
              <li>{trans.national_page.reasons1.bullet3}</li>
              <li>{trans.national_page.reasons1.bullet4}</li>
              <li>{trans.national_page.reasons1.bullet5}</li>
              <li>{trans.national_page.reasons1.bullet6}</li>
              <li>{trans.national_page.reasons1.bullet7}</li>
            </ul>
          </div>
          <div className="national-page__reason--right">
            <h3>{trans.national_page.reason_question2}</h3>
            <ul>
              <li>{trans.national_page.reasons2.bullet1}</li>
              <li>{trans.national_page.reasons2.bullet2}</li>
              <li>{trans.national_page.reasons2.bullet3}</li>
              <li>{trans.national_page.reasons2.bullet4}</li>
              <li>{trans.national_page.reasons2.bullet5}</li>
              <li>{trans.national_page.reasons2.bullet6}</li>
              <li>{trans.national_page.reasons2.bullet7}</li>
            </ul>
          </div>
        </div>
      </AnimatedSection>

      {/* Projects */}
      <div className="national-page__projects">
        <AnimatedSection animation="fadeUp" delay={0.2}>
          <h3>{trans.national_page.projects_title}</h3>
        </AnimatedSection>
        <AnimatedSection animation="fadeInScale" delay={0.2}>
          <div className="national-page__projects--cards">
            <ProjectCard
              image={getAssetPath("/images/photos/vivol-compartir.webp")}
              alt={trans.alt.national_image2}
              title={trans.national_page.projects_card_title1}
              quote={trans.national_page.projects_card_quote1}
              name="— Stacia Tausche"
              color="#B490F0"
            />
            <ProjectCard
              image={getAssetPath("/images/photos/vivol-ancianos.webp")}
              alt={trans.alt.national_image3}
              title={trans.national_page.projects_card_title2}
              quote={trans.national_page.projects_card_quote2}
              name="— Lillian Gordy Carter"
              color="#1683F0"
            />
          </div>
        </AnimatedSection>
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