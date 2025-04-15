// page.js (Aboutpage/Server component)

import { getTranslations } from "locales/translations";
import Image from "next/image";
import OvalCard from "@/components/cards/OvalCard";

export default async function AboutPage(props) {
    const params = await props.params;
    const lang = params?.lang || 'es'; 
    const trans = await getTranslations(lang);

    return (
      <div className="about-page">

        {/* Introducction */}
        <div className="about-page__intro">
          <Image
            className="about-page__intro--image"
            src="/images/photos/vivol-celeste.jpg"
            alt={trans.alt.about_image1}
            width={300}
            height={300}
            priority
            quality={100}
          />
          <div className="about-page__intro--text">
            <h2>{trans.about_page.about}</h2>
            <p>{trans.about_page.text1}</p>
          </div>
        </div>

        {/* Middle */}
        <div className="about-page__middle">
          <div className="about-page__middle--text">
            <ul>
              <li>{trans.about_page.bullet1}</li>
              <li>{trans.about_page.bullet2}</li>
              <li>{trans.about_page.bullet3}</li>
              <li>{trans.about_page.bullet4}</li>
            </ul>
            <p>{trans.about_page.text2}</p>
          </div>
          <Image
            className="about-page__middle--image"
            src="/images/photos/vivol-chaleco.jpg"
            alt={trans.alt.about_image2}
            width={300}
            height={300}
            priority
            quality={100}
          />
        </div>

        {/* Philosophy */}
        <div className="about-page__philosophy">
          <OvalCard 
            icon="/images/icons/target.svg"
            alt="target icon"
            title={trans.about_page.mission}
            text={trans.about_page.mission_text}
            color="#00BF4C"
          />
          <OvalCard 
            icon="/images/icons/eye.svg"
            alt="eye icon"
            title={trans.about_page.vision}
            text={trans.about_page.vision_text}
            color="#B490F0"
          />
          <OvalCard 
            icon="/images/icons/diamond.svg"
            alt="target icon"
            title={trans.about_page.values.title}
            listItems={[ 
              trans.about_page.values.bullet1,
              trans.about_page.values.bullet2,
              trans.about_page.values.bullet3,
              trans.about_page.values.bullet4,
              trans.about_page.values.bullet5,
              trans.about_page.values.bullet6,
              trans.about_page.values.bullet7
            ]}
            color="#FFDE59"
          />
        </div>
      </div>
    );
}