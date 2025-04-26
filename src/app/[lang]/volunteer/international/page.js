// page.js (International Volunteer Page/Server component)

import Image from "next/image";
import { getTranslations } from "locales/translations";
import ProgramCard from "@/components/cards/ProgramCard";

export default async function InternationalPage(props) {
  const params = await props.params;
  const lang = params?.lang || 'es'; 
  const trans = await getTranslations(lang);

  return (
    <div className="inter-page">
      
      {/* Intro */}
      <div className="inter-page__intro">
        <Image
          src="/images/photos/vivol-torii.jpg"
          alt={trans?.alt?.inter_image1 || "Volunteer in front of a Torii gate"}
          fill
          style={{ objectFit: 'cover', objectPosition: '50% 55%' }}
          priority
        />
        <div className="inter-page__intro--overlay">
          <div className="inter-page__intro--text">
            <h1>{trans.inter_page.title}</h1>
            <p>{trans.inter_page.intro_text}</p>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="inter-page__info">
        <div className="inter-page__info--title">
          <h1>{trans.inter_page.info_title}</h1>
          <Image
            src="/images/photos/icye-logo-simple.svg"
            alt="ICYE logo"
            height={100}
            width={100}
          />
        </div>
        <div className="inter-page__info--left">
          <div className="inter-page__info--image-1">
            <Image
              src="/images/photos/vivol-alemania.jpg"
              alt={trans?.alt?.inter_image2 || "Volunteer in Germany in front of a tower"}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <p className="inter-page__info--text">
            {trans.inter_page.info_text1}
          </p>
        </div>
        <div className="inter-page__info--right">
          <p className="inter-page__info--text">
            {trans.inter_page.info_text2}
          </p>
          <div className="inter-page__info--image-2">
            <Image
              src="/images/photos/vivol-paz.jpg"
              alt={trans?.alt?.inter_image3 || "Volunteer in front of a statue"}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
        <div className="inter-page__info--left">
          <div className="inter-page__info--image-3">
            <Image
              src="/images/photos/vivol-pileta.jpeg"
              alt={trans?.alt?.inter_image4 || "Volunteer in front of a fountain"}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <p className="inter-page__info--text">
            {trans.inter_page.info_text3}
          </p>
        </div>
      </div>

      {/* Benefits */}
      <div className="inter-page__benefits">
        <div className="inter-page__benefits--text">
          <h3>{trans.inter_page.benefits_title}</h3>
          <p>{trans.inter_page.benefits_text}</p>
        </div>
        <div className="inter-page__benefits--cards">
          <ProgramCard
            icon="/images/icons/star.svg"
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
            color="#00BF4C"
          />
          <ProgramCard
            icon="/images/icons/heart.svg"
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
            color="#1683F0"
          />
          <ProgramCard
            icon="/images/icons/x.svg"
            title={trans.inter_page.contain.title}
            listItems={[
              trans.inter_page.contain.bullet1,
              trans.inter_page.contain.bullet2,
              trans.inter_page.contain.bullet3
            ]}
            color="#BF0000"
          />
        </div>
      </div>

      {/* Process */}
      <div className="inter-page__process">

      </div>

      {/* Destination */} 

    </div>
  );
}