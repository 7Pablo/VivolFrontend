// page.js (National Volunteer Page/Server component)

import SimpleCard from "@/components/cards/SimpleCard";
import SmallCard from "@/components/cards/SmallCard";
import { getTranslations } from "locales/translations";
import Image from "next/image";

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
              color="#00BF4C"
            />
            <SmallCard
              icon="/images/icons/hollow-world.svg"
              title={trans.national_page.language_title}
              text={trans.national_page.language_text}
              color="#B490F0"
            />
          </div>
          <div className="national-page__info--cards-bottom">
            <SmallCard
              icon="/images/icons/bank.svg"
              title={trans.national_page.government_title}
              text={trans.national_page.government_text}
              color="#FFDE59"
            />
            <SmallCard
              icon="/images/icons/coin.svg"
              title={trans.national_page.currency_title}
              text={trans.national_page.currency_text}
              color="#1683F0"
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

        </div>
        <div className="national-page__reason--right">

        </div>
      </div>

      {/* Projects */}
      
    </div>
  );
}