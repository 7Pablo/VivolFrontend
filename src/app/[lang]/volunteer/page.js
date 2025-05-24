// page.js (Volunteer Page/Server component)

import Image from "next/image";
import { getTranslations } from "locales/translations";
import DoubleButton from "@/components/buttons/DoubleButton";
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
  const path = `/${lang}/volunteer`; 
  const canonicalUrl = `${baseUrl}${path}`;
  
  return {
    title: trans.metadata?.volunteer.title || 'Voluntariado con Vivol – Visión general',
    description: trans.metadata?.volunteer.description || 'Descubre cómo hacer voluntariado con Vivol, ya sea a nivel nacional o internacional con ICYE.',
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

// VolunteerPage
export default async function VolunteerPage(props) {
  const params = await props.params;
  const lang = params?.lang || 'es'; 
  const trans = await getTranslations(lang);

  return (
    <div className="volunteer">

      {/* Decision */}
      <div className="volunteer__decision">
        <div className="volunteer__decision--background">
          <div className="volunteer__decision--half">
            <Image
              src={getAssetPath("/images/photos/vivol-inter.webp")}
              alt={trans?.alt?.volunteer_background1 || "Volunteer in Germany"}
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
            />
          </div>
          <div className="volunteer__decision--half">
            <Image
              src={getAssetPath("/images/photos/vivol-nat.webp")}
              alt={trans?.alt?.volunteer_background2 || "Volunteer in Peru"}
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
            />
          </div>
        </div>
        <div className="volunteer__decision--overlay">
          <h1>{trans.volunteer_page.title}</h1>
          <DoubleButton
            routeLeft="volunteer/international"
            routeRight="volunteer/national"
            textLeft={trans.button.volunteer_inter}
            textRight={trans.button.volunteer_nat}
          />
        </div>
      </div>

      {/* Definition */}
      <div className="volunteer__definition">
        <Image
          className="volunteer__definition--image"
          src={getAssetPath("/images/photos/vivol-austria.webp")}
          alt={trans?.alt?.volunteer_image1 || "Volunteer in Austria"}
          width={300}
          height={300}
          quality={100}
        />
        <p className="volunteer__definition--text">
          {trans.volunteer_page.definition}
        </p>
      </div>

      {/* Quote */}
      <div className="home-page__quote">
        <div className="home-page__quote--fade">
          <Image
            src={getAssetPath("/images/photos/papel.webp")}
            alt={trans?.alt?.quote1 || "Paper background"}
            fill
            style={{ objectFit: 'cover' }}
            quality={100}
          />
        </div>
        <div className="home-page__quote--content">
          <Image
              src={getAssetPath("/images/icons/quotes.svg")}
              alt="Quote icon"
              width={50}
              height={50}
              className="home-page__quote--icon"
          />
          <h3>{trans.volunteer_page.quote}</h3>
          <p>– Marianne Williamson</p>
        </div>
      </div>

      {/* Middle */}
      <div className="volunteer__middle">
        <div className="volunteer__middle--top">
          <div className="volunteer__middle--top-text">
            <p>{trans.volunteer_page.middle_text1}</p>
            <p>{trans.volunteer_page.middle_text2}</p>
          </div>
          <Image
            className="volunteer__middle--image-1"
            src={getAssetPath("/images/photos/vivol-fiestas.webp")}
            alt={trans?.alt?.volunteer_image2 || "Volunteers in Party"}
            width={300}
            height={300}
            quality={100}
          />
        </div>
        <div className="volunteer__middle--bottom">
          <Image
            className="volunteer__middle--image-2"
            src={getAssetPath("/images/photos/vivol-cartel.webp")}
            alt={trans.alt.volunteer_image3 || "Volunteers holding a sign"}
            width={300}
            height={300}
            quality={100}
          />
          <ul>
            <li>{trans.volunteer_page.middle_text3.bullet1}</li>
            <li>{trans.volunteer_page.middle_text3.bullet2}</li>
            <li>{trans.volunteer_page.middle_text3.bullet3}</li>
            <li>{trans.volunteer_page.middle_text3.bullet4}</li>
            <li>{trans.volunteer_page.middle_text3.bullet5}</li>
            <li>{trans.volunteer_page.middle_text3.bullet6}</li>
            <li>{trans.volunteer_page.middle_text3.bullet7}</li>
            <li>{trans.volunteer_page.middle_text3.bullet8}</li>
            <li>{trans.volunteer_page.middle_text3.bullet9}</li>
          </ul>
        </div>
      </div>

      {/* Benefits */}
      <div className="volunteer__benefits">
        <h3>{trans.volunteer_page.benefits_title}</h3>
        <div className="volunteer__benefits--cards">
          <BenefitCard
            icon={getAssetPath("/images/icons/house.svg")}
            title={trans.volunteer_page.benefits_host_title}
            text={trans.volunteer_page.benefits_host_text}
            color="#85AF59"
          />
          <BenefitCard
            icon={getAssetPath("/images/icons/food.svg")}
            title={trans.volunteer_page.benefits_food_title}
            text={trans.volunteer_page.benefits_food_text}
            color="#BF0000"
          />
          <BenefitCard
            icon={getAssetPath("/images/icons/message.svg")}
            title={trans.volunteer_page.benefits_talk_title}
            text={trans.volunteer_page.benefits_talk_text}
            color="#E1BD2A"
          />
          <BenefitCard
            icon={getAssetPath("/images/icons/world.svg")}
            title={trans.volunteer_page.benefits_world_title}
            text={trans.volunteer_page.benefits_world_text}
            color="#1583F0"
          />
          <BenefitCard
            icon={getAssetPath("/images/icons/transport.svg")}
            title={trans.volunteer_page.benefits_truck_title}
            text={trans.volunteer_page.benefits_truck_text}
            color="#00BFBF"
          />
          <BenefitCard
            icon={getAssetPath("/images/icons/book.svg")}
            title={trans.volunteer_page.benefits_book_title}
            text={trans.volunteer_page.benefits_book_text}
            color="#D53686"
          />
        </div>
        <Button 
          route="contact"
        >
          {trans.button.carousel}
        </Button>
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