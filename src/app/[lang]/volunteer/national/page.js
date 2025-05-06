// page.js (National Volunteer Page/Server component)

import ProjectCard from "@/components/cards/ProjectCard";
import SimpleCard from "@/components/cards/SimpleCard";
import SmallCard from "@/components/cards/SmallCard";
import Image from "next/image";
import { getTranslations } from "locales/translations";

export default async function NationalPage(props) {
  const params = await props.params;
  const lang = params?.lang || 'es'; 
  const trans = await getTranslations(lang);
  
  return (
    <div className="national-page">

      {/* Intro */}
      <div className="national-page__intro">
        <Image
          src="/images/photos/vivol-paleta.jpg"
          alt={trans?.alt?.national_image1 || "Volunteer with paddles"}
          fill
          style={{ objectFit: 'cover', objectPosition: '50% 35%' }}
          priority
        />
        <div className="national-page__intro--overlay">
          <div className="national-page__intro--text">
            <h1>{trans.national_page.title}</h1>
            <p>{trans.national_page.intro_text}</p>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="national-page__info">
        <div className="national-page__info--image">
          <Image
            src="/images/photos/peru.png"
            alt={trans?.alt?.peru_flag || "Peru flag"}
            height={500}
            width={500}
            priority
          />
        </div>
        <div className="national-page__info--cards">
          <div className="national-page__info--cards-top">
            <SmallCard
              icon="/images/icons/pin.svg"
              title={trans.national_page.capital_title}
              text={trans.national_page.capital_text}
              color="#85AF59"
            />
            <SmallCard
              icon="/images/icons/hollow-world.svg"
              title={trans.national_page.language_title}
              text={trans.national_page.language_text}
              color="#D53686"
            />
          </div>
          <div className="national-page__info--cards-bottom">
            <SmallCard
              icon="/images/icons/bank.svg"
              title={trans.national_page.government_title}
              text={trans.national_page.government_text}
              color="#E1BD2A"
            />
            <SmallCard
              icon="/images/icons/coin.svg"
              title={trans.national_page.currency_title}
              text={trans.national_page.currency_text}
              color="#1583F0"
            />
          </div>
        </div>
      </div>

      {/* Geography */}
      <div className="national-page__geography">
      <div className="national-page__geography--image">
          <Image
            src="/images/photos/rio.jpg"
            alt="Mountain Peru"
            fill
            style={{ objectFit: 'cover', objectPosition: '40% 50%' }}
            quality={100}
          />
        </div>
        <div className="national-page__geography--overlay">
          <div className="national-page__geography--text">
            <h3>{trans.national_page.geography_title}</h3>
            <p>{trans.national_page.geography_text}</p>
          </div>
          <div className="national-page__geography--cards">
            <SimpleCard 
              icon="/images/icons/costa.svg"
              title={trans.national_page.cards.card_title1}
              text={trans.national_page.cards.card_text1}
              size={115}
            />
            <SimpleCard 
              icon="/images/icons/sierra.svg"
              title={trans.national_page.cards.card_title2}
              text={trans.national_page.cards.card_text2}
              size={150}
            />
            <SimpleCard 
              icon="/images/icons/amazonia.svg"
              title={trans.national_page.cards.card_title3}
              text={trans.national_page.cards.card_text3}
              size={100}
            />
          </div>
        </div>
      </div>

      {/* Reason */}
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

      {/* Projects */}
      <div className="national-page__projects">
        <h3>{trans.national_page.projects_title}</h3>
        <div className="national-page__projects--cards">
          <ProjectCard
            image="/images/photos/vivol-compartir.JPG"
            alt={trans.alt.national_image2}
            title={trans.national_page.projects_card_title1}
            quote={trans.national_page.projects_card_quote1}
            name="— Stacia Tausche"
            color="#B490F0"
          />
          <ProjectCard 
            image="/images/photos/vivol-ancianos.jpeg"
            alt={trans.alt.national_image3}
            title={trans.national_page.projects_card_title2}
            quote={trans.national_page.projects_card_quote2}
            name="— Lillian Gordy Carter"
            color="#1683F0"
          />
        </div>
      </div>
      
    </div>
  );
}