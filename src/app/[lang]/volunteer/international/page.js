// page.js (International Volunteer Page/Server component)

import Image from "next/image";
import { getTranslations } from "locales/translations";
import ProgramCard from "@/components/cards/ProgramCard";
import IconTextCard from "@/components/cards/IconTextCard";
import ProcessCard from "@/components/cards/ProcessCard";
import WorldButton from "@/components/buttons/WorldButton";
import WorldDropdown from "@/components/buttons/WorldDropdown";
import { getAssetPath } from "@/utils/getAssetPath";
import AnimatedSection from "@/utils/AnimatedSection";

// Metadata
export async function generateMetadata({ params }) {

  // Translations
  const { lang } = await params;
  const trans = await getTranslations(lang);

  // Canonical
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const path = `/${lang}/volunteer/international`; 
  const canonicalUrl = `${baseUrl}${path}`;
  
  return {
    title: trans.metadata?.international.title || 'Voluntariado en el extranjero – 40 países con Vivol',
    description: trans.metadata?.international.description || '¡Sé un voluntario global! Explora oportunidades, requisitos y destinos disponibles.',
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

// InternationalPage
export default async function InternationalPage(props) {
  const params = await props.params;
  const lang = params?.lang || 'es'; 
  const trans = await getTranslations(lang);

  return (
    <div className="inter-page">
      
      {/* Intro */}
      <div className="inter-page__intro">
        <Image
          src={getAssetPath("/images/photos/vivol-torii.webp")}
          alt={trans?.alt?.inter_image1 || "Volunteer in front of a Torii gate"}
          fill
          style={{ objectFit: 'cover', objectPosition: '50% 55%' }}
          priority
        />
        <div className="inter-page__intro--overlay">
          <div className="inter-page__intro--text">
            <AnimatedSection animation="slideFromLeft" delay={0.2}> 
              <h1>{trans.inter_page.title}</h1>
            </AnimatedSection>
            <AnimatedSection animation="slideFromLeft" delay={0.4}> 
              <p>{trans.inter_page.intro_text}</p>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="inter-page__info">
        <div className="inter-page__info--title">
          <AnimatedSection animation="fadeUp" delay={0.2}> 
            <h2>{trans.inter_page.info_title}</h2>
          </AnimatedSection>
        </div>
        <AnimatedSection animation="slideFromLeft" delay={0.2}> 
          <div className="inter-page__info--left">
            <div className="inter-page__info--image-1">
              <Image
                src={getAssetPath("/images/photos/vivol-alemania.webp")}
                alt={trans?.alt?.inter_image2 || "Volunteer in Germany in front of a tower"}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <p className="inter-page__info--text">
              {trans.inter_page.info_text1}
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection animation="slideFromRight" delay={0.2}> 
          <div className="inter-page__info--right">
            <p className="inter-page__info--text">
              {trans.inter_page.info_text2}
            </p>
            <div className="inter-page__info--image-2">
              <Image
                src={getAssetPath("/images/photos/vivol-paz.webp")}
                alt={trans?.alt?.inter_image3 || "Volunteer in front of a statue"}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection animation="slideFromLeft" delay={0.2}> 
          <div className="inter-page__info--left">
            <div className="inter-page__info--image-3">
              <Image
                src={getAssetPath("/images/photos/vivol-pileta.webp")}
                alt={trans?.alt?.inter_image4 || "Volunteer in front of a fountain"}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <p className="inter-page__info--text">
              {trans.inter_page.info_text3}
            </p>
          </div>
        </AnimatedSection>
      </div>

      {/* Benefits */}
      <div className="inter-page__benefits">
        <AnimatedSection animation="fadeUp" delay={0.2}> 
          <div className="inter-page__benefits--text">
            <h3>{trans.inter_page.benefits_title}</h3>
            <p>{trans.inter_page.benefits_text}</p>
          </div>
        </AnimatedSection>
        <div className="inter-page__benefits--cards">
          <AnimatedSection animation="bounceInShakeScroll" delay={0.2}> 
            <ProgramCard
              icon={getAssetPath("/images/icons/star.svg")}
              title={trans.inter_page.tangibles.title}
              listItems={[
                trans.inter_page.tangibles.bullet1,
                trans.inter_page.tangibles.bullet2,
                trans.inter_page.tangibles.bullet3,
                trans.inter_page.tangibles.bullet4,
                trans.inter_page.tangibles.bullet5,
                trans.inter_page.tangibles.bullet6,
                trans.inter_page.tangibles.bullet7,
                trans.inter_page.tangibles.bullet8,
                trans.inter_page.tangibles.bullet9
              ]}
              color="#85AF59"
            />
          </AnimatedSection>
          <AnimatedSection animation="bounceInShakeScroll" delay={0.2}>
            <ProgramCard
              icon={getAssetPath("/images/icons/heart.svg")}
              title={trans.inter_page.intangibles.title}
              listItems={[
                trans.inter_page.intangibles.bullet1,
                trans.inter_page.intangibles.bullet2,
                trans.inter_page.intangibles.bullet3,
                trans.inter_page.intangibles.bullet4,
                trans.inter_page.intangibles.bullet5,
                trans.inter_page.intangibles.bullet6,
                trans.inter_page.intangibles.bullet7
              ]}
              color="#1583F0"
            />
          </AnimatedSection>
          <AnimatedSection animation="bounceInShakeScroll" delay={0.2} className="animated-section">
            <ProgramCard
              icon={getAssetPath("/images/icons/x.svg")}
              title={trans.inter_page.contain.title}
              listItems={[
                trans.inter_page.contain.bullet1,
                trans.inter_page.contain.bullet2,
                trans.inter_page.contain.bullet3
              ]}
              color="#BF0000"
            />
          </AnimatedSection>
        </div>
      </div>

      {/* Process */}
      <div className="inter-page__process">
            <div className="inter-page__background">
              <Image
                src={getAssetPath("/images/photos/alemania.webp")}
                alt="Germany"
                fill
                style={{ objectFit: 'cover'}}
              />
            </div>
            <div className="inter-page__process--overlay">
              <AnimatedSection animation="fadeUp" delay={0.2}>
                <div className="inter-page__process--text">
                  <h3>{trans.inter_page.process_title}</h3>
                  <h2>{trans.inter_page.process_subtitle1}</h2>
                </div>
              </AnimatedSection>
              <div className="inter-page__process--requirements">
                <AnimatedSection animation="flipCard" delay={0.2}>
                  <IconTextCard
                    icon={getAssetPath("/images/icons/edad.svg")}
                    text={trans.inter_page.reqs.req1}
                  />
                </AnimatedSection>
                <AnimatedSection animation="flipCard" delay={0.3}>
                  <IconTextCard
                    icon={getAssetPath("/images/icons/saludo.png")}
                    text={trans.inter_page.reqs.req2}
                  />
                </AnimatedSection>
                <AnimatedSection animation="flipCard" delay={0.4}>
                  <IconTextCard
                    icon={getAssetPath("/images/icons/bandera.svg")}
                    text={trans.inter_page.reqs.req3}
                  />
                </AnimatedSection>
                <AnimatedSection animation="flipCard" delay={0.5}>
                  <IconTextCard
                    icon={getAssetPath("/images/icons/registro.svg")}
                    text={trans.inter_page.reqs.req4}
                  />
                </AnimatedSection>
                <AnimatedSection animation="flipCard" delay={0.6}>
                  <IconTextCard
                    icon={getAssetPath("/images/icons/manos.svg")}
                    text={trans.inter_page.reqs.req5}
                  />
                </AnimatedSection>
                <AnimatedSection animation="flipCard" delay={0.7}>
                  <IconTextCard
                    icon={getAssetPath("/images/icons/boleto.svg")}
                    text={trans.inter_page.reqs.req6}
                  />
                </AnimatedSection>
              </div>
              <div className="inter-page__process--text">
                <AnimatedSection animation="fadeUp" delay={0.2}>
                  <h2>{trans.inter_page.process_subtitle2}</h2>
                </AnimatedSection>
              </div>
              <div className="inter-page__process--steps">
                <div className="inter-page__process--half">
                  <AnimatedSection animation="dominoFall" delay={0.1} className="animated-section">
                    <ProcessCard
                      number="1"
                      text={trans.inter_page.steps.step1}
                      color="#1683F0"
                    />
                  </AnimatedSection>
                  <AnimatedSection animation="dominoFall" delay={0.2} className="animated-section">
                    <ProcessCard
                      number="2"
                      text={trans.inter_page.steps.step2}
                      color="#85AF59"
                    />
                  </AnimatedSection>
                  <AnimatedSection animation="dominoFall" delay={0.3} className="animated-section">
                    <ProcessCard
                      number="3"
                      text={trans.inter_page.steps.step3}
                      color="#B490F0"
                    />
                  </AnimatedSection>
                  <AnimatedSection animation="dominoFall" delay={0.4} className="animated-section">
                    <ProcessCard
                      number="4"
                      text={trans.inter_page.steps.step4}
                      color="#E1BD2A"
                    />
                  </AnimatedSection>
                  <AnimatedSection animation="dominoFall" delay={0.5} className="animated-section">
                    <ProcessCard
                      number="5"
                      text={trans.inter_page.steps.step5}
                      color="#2C4B8C"
                    />
                  </AnimatedSection>
                </div>
                <div className="inter-page__process--half">
                  <AnimatedSection animation="dominoFall" delay={0.1} className="animated-section">
                    <ProcessCard
                      number="6"
                      text={trans.inter_page.steps.step6}
                      color="#C90707"
                    />
                  </AnimatedSection>
                  <AnimatedSection animation="dominoFall" delay={0.2} className="animated-section">
                    <ProcessCard
                      number="7"
                      text={trans.inter_page.steps.step7}
                      color="#00BFBF"
                    />
                  </AnimatedSection>
                  <AnimatedSection animation="dominoFall" delay={0.3} className="animated-section">
                    <ProcessCard
                      number="8"
                      text={trans.inter_page.steps.step8}
                      color="#F0A616"
                    />
                  </AnimatedSection>
                  <AnimatedSection animation="dominoFall" delay={0.4} className="animated-section">
                    <ProcessCard
                      number="9"
                      text={trans.inter_page.steps.step9}
                      color="#26824A"
                    />
                  </AnimatedSection>
                  <AnimatedSection animation="dominoFall" delay={0.5} className="animated-section">
                    <ProcessCard
                      number="10"
                      text={trans.inter_page.steps.step10}
                      color="#D53686"
                    />
                  </AnimatedSection>
                </div>
              </div>
            </div>
      </div>

      {/* Destination */} 
      <div className="inter-page__destination">
        <AnimatedSection animation="fadeUp" delay={0.2}>
          <h3>{trans.inter_page.destination_title}</h3>
        </AnimatedSection>
        <div className="inter-page__destination--continents">
            <div className="inter-page__destination--continents-america">
              <AnimatedSection animation="bouncyFall" delay={0.2} className="animated-section">
                <WorldDropdown
                  text={trans.inter_page.america.title}
                >
                  {Object.entries(trans.inter_page.america)
                    .filter(([key]) => key !== "title")
                    .map(([countryKey, countryData]) => (
                      <WorldButton
                        key={countryKey}
                        data={countryData}
                        icon={getAssetPath(`/images/countries/${countryKey}.svg`)}
                        trans={trans}
                      />
                  ))}
                </WorldDropdown>
              </AnimatedSection>
            </div>
            <div className="inter-page__destination--continents-africa">
              <AnimatedSection animation="bouncyFall" delay={0.3} className="animated-section">
                <WorldDropdown
                  text={trans.inter_page.africa.title}
                >
                  {Object.entries(trans.inter_page.africa)
                    .filter(([key]) => key !== "title")
                    .map(([countryKey, countryData]) => (
                      <WorldButton
                        key={countryKey}
                        data={countryData}
                        icon={getAssetPath(`/images/countries/${countryKey}.svg`)}
                        trans={trans}
                      />
                  ))}
                </WorldDropdown>
              </AnimatedSection>
            </div>
            <div className="inter-page__destination--continents-asia">
              <AnimatedSection animation="bouncyFall" delay={0.4} className="animated-section">
                <WorldDropdown
                  text={trans.inter_page.asia.title}
                >
                  {Object.entries(trans.inter_page.asia)
                    .filter(([key]) => key !== "title")
                    .map(([countryKey, countryData]) => (
                      <WorldButton
                        key={countryKey}
                        data={countryData}
                        icon={getAssetPath(`/images/countries/${countryKey}.svg`)}
                        trans={trans}
                      />
                  ))}
                </WorldDropdown>
              </AnimatedSection>
            </div>
            <div className="inter-page__destination--continents-europe">
              <AnimatedSection animation="bouncyFall" delay={0.5} className="animated-section">
                <WorldDropdown
                  text={trans.inter_page.europe.title}
                >
                  {Object.entries(trans.inter_page.europe)
                    .filter(([key]) => key !== "title")
                    .map(([countryKey, countryData]) => (
                      <WorldButton
                        key={countryKey}
                        data={countryData}
                        icon={getAssetPath(`/images/countries/${countryKey}.svg`)}
                        trans={trans}
                      />
                  ))}
                </WorldDropdown>
              </AnimatedSection>
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