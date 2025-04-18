// page.js (Homepage/Server component)

import Image from "next/image";
import { getTranslations } from "locales/translations";
import DoubleButton from "@/components/buttons/DoubleButton";

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
              src="/images/photos/vivol-inter.jpg"
              alt={trans?.alt?.volunteer_background1 || "Volunteer in Germany"}
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
            />
          </div>
          <div className="volunteer__decision--half">
            <Image
              src="/images/photos/vivol-nat.jpg"
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
            routeLeft="volunteer/intenational"
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
          src="/images/photos/vivol-austria.jpeg"
          alt={trans.alt.volunteer_image1}
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
            src="/images/photos/papel.jpg"
            alt={trans.alt.quote1}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="home-page__quote--content">
          <Image
              src='/images/icons/quotes.svg'
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
            src="/images/photos/vivol-fiestas.jpg"
            alt={trans.alt.volunteer_image2}
            width={300}
            height={300}
            quality={100}
          />
        </div>
        <div className="volunteer__middle--bottom">
          <Image
            className="volunteer__middle--image-2"
            src="/images/photos/vivol-cartel.jpg"
            alt={trans.alt.volunteer_image3}
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

    </div>
  );
}