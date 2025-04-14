// page.js (Aboutpage/Server component)

import { getTranslations } from "locales/translations";
import Image from "next/image";

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
          
        </div>
      </div>
    );
}