// page.js (Aboutpage/Server component)

import { getTranslations } from "locales/translations";
import Image from "next/image";
import OvalCard from "@/components/cards/OvalCard";
import MemberCard from "@/components/cards/MemberCard";
import { getAssetPath } from "@/utils/getAssetPath";

// Metadata
export async function generateMetadata({ params }) {

  // Translations
  const { lang } = await params;
  const trans = await getTranslations(lang);

  // Canonical
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const path = `/${lang}/about`; 
  const canonicalUrl = `${baseUrl}${path}`;

  return {
    title: trans.metadata?.about.title || 'Sobre Vivol – Nuestra misión e historia',
    description: trans.metadata?.about.description || 'Conoce los valores, la misión y el trabajo de Vivol para conectar voluntarios a nivel global.',
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

// AboutPage
export default async function AboutPage(props) {
    const params = await props.params;
    const lang = params?.lang || 'es'; 
    const trans = await getTranslations(lang);

    return (
      <div className="about-page">

        <h1 className="sr-only">{trans.about_page.about}</h1>

        {/* Introducction */}
        <div className="about-page__intro">
          <Image
            className="about-page__intro--image"
            src={getAssetPath("/images/photos/vivol-celeste.webp")}
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
            src={getAssetPath("/images/photos/vivol-chaleco.webp")}
            alt={trans.alt.about_image2}
            width={300}
            height={300}
            priority
            quality={100}
          />
        </div>

        {/* Quote */}
        <div className="home-page__quote">
          <div className="home-page__quote--fade">
            <Image
              src={getAssetPath("/images/photos/papel.webp")}
              alt={trans.alt.quote1}
              fill
              style={{ objectFit: 'cover' }}
              quality={100}
            />
          </div>
          <div className="home-page__quote--content">
            <Image
                src={getAssetPath('/images/icons/quotes.svg')}
                alt="Quote icon"
                width={50}
                height={50}
                className="home-page__quote--icon"
            />
            <h3>{trans.home_page.quote}</h3>
            <p>— Audrey Hepburn</p>
          </div>
        </div>

        {/* Philosophy */}
        <div className="about-page__philosophy">
          <OvalCard 
            icon={getAssetPath("/images/icons/target.svg")}
            alt="target icon"
            title={trans.about_page.mission}
            text={trans.about_page.mission_text}
            color="#85AF59"
          />
          <OvalCard 
            icon={getAssetPath("/images/icons/eye.svg")}
            alt="eye icon"
            title={trans.about_page.vision}
            text={trans.about_page.vision_text}
            color="#D53686"
          />
          <OvalCard 
            icon={getAssetPath("/images/icons/diamond.svg")}
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
            color="#E1BD2A"
          />
        </div>

        {/* Members */}
        <div className="about-page__members">
            <Image 
            src={getAssetPath("/images/photos/machupicchu.webp")}
              alt="Machu Picchu, Peru"
              fill
              style={{ objectFit: 'cover', objectPosition: '50% 60%' }}
              priority
            />
            <div className="about-page__members--overlay">
              <h3>{trans.about_page.members_title}</h3>
              <h2>{trans.about_page.members_active}</h2>
              <div className="about-page__members--cards">
                <MemberCard 
                  src={getAssetPath("/images/photos/anonymous.webp")}
                  alt="Renato Noriega"
                  name="Renato Noriega"
                  role={trans.about_page.members.member1_role}
                  phrase={trans.about_page.members.member1_phrase}
                />
                <MemberCard 
                  src={getAssetPath("/images/photos/anonymous.webp")}
                  alt="Pamela Villagómez"
                  name="Pamela Villagómez"
                  role={trans.about_page.members.member2_role}
                  phrase={trans.about_page.members.member2_phrase}
                />
                <MemberCard 
                  src={getAssetPath("/images/photos/member3.webp")}
                  alt="Flor María Merlo"
                  name="Flor María Merlo"
                  role={trans.about_page.members.member3_role}
                  phrase={trans.about_page.members.member3_phrase}
                  position="50% 20%"
                />
              </div>
            </div>
        </div>
        
        {/* Life */}
        <div className="about-page__life">
          <h3>{trans.about_page.life_title}</h3>
          <div className="about-page__life--content">
            <Image
              className="about-page__life--image"
              src={getAssetPath("/images/photos/vivol-nieve.webp")}
              alt={trans.alt.about_image3}
              width={300}
              height={300}
              quality={100}
            />
            <div className="about-page__life--text">
              <p>{trans.about_page.life_text1}</p>
              <p>{trans.about_page.life_text2}</p>
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