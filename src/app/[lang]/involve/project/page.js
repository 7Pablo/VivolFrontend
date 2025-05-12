// page.js (Project Page/ Server component) 

import { getAssetPath } from "@/utils/getAssetPath";
import { getTranslations } from "locales/translations";
import Image from "next/image";

export default async function ProjectPage(props) {
  const params = await props.params;
  const lang = params?.lang || 'es'; 
  const trans = await getTranslations(lang);

  return (
    <div className="project_page">

      {/* Intro */}
      <div className="project-page__intro">
        <Image
          src={getAssetPath("/images/photos/vivol-dibujo.jpg")}
          alt={trans?.alt?.project_image1 || "Volunteers drawing with children"}
          fill
          style={{ objectFit: 'cover', objectPosition: "50% 60%" }}
          priority
        />
        <div className="project-page__intro--overlay">
          <div className="project-page__intro--text">
            <h1>{trans.project_page.title}</h1>
            <p>{trans.project_page.intro_text}</p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="project-page__body">
        <div className="project-page__body--top">
          <p>{trans.project_page.top_text1}</p>
          <p>{trans.project_page.top_text2}</p>
        </div>

        {/* Card 1 */}
        <div className="project-page__body--card">
          <div className="project-page__body--text-left">
            <h3>{trans.project_page.card1.title}</h3>
            <ul>
              <li>{trans.project_page.card1.bullet1}</li>
              <li>{trans.project_page.card1.bullet2}</li>
              <li>{trans.project_page.card1.bullet3}</li>
              <li>{trans.project_page.card1.bullet4}</li>
              <li>{trans.project_page.card1.bullet5}</li>
              <li>{trans.project_page.card1.bullet6}</li>
              <li>{trans.project_page.card1.bullet7}</li>
            </ul>
          </div>
          <div className="project-page__body--image">
            <Image
              src={getAssetPath("/images/photos/vivol-salto.jpg")}
              alt={trans?.alt?.project_image2 || "VIVOL volunteers"}
              fill
              style={{ objectFit: 'cover', objectPosition: "50% 15%" }}
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="project-page__body--card">
          <div className="project-page__body--image">
            <Image
              src={getAssetPath("/images/photos/vivol-mono.JPG")}
              alt={trans?.alt?.project_image3 || "Volunteer with a monkey"}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="project-page__body--text-right">
            <h3>{trans.project_page.card2.title}</h3>
            <ul>
              <li>{trans.project_page.card2.bullet1}</li>
              <li>{trans.project_page.card2.bullet2}</li>
              <li>{trans.project_page.card2.bullet3}</li>
              <li>{trans.project_page.card2.bullet4}</li>
              <li>{trans.project_page.card2.bullet5}</li>
              <li>{trans.project_page.card2.bullet6}</li>
              <li>{trans.project_page.card2.bullet7}</li>
              <li>{trans.project_page.card2.bullet8}</li>
              <li>{trans.project_page.card2.bullet9}</li>
              <li>{trans.project_page.card2.bullet10}</li>
              <li>{trans.project_page.card2.bullet11}</li>
              <li>{trans.project_page.card2.bullet12}</li>
              <li>{trans.project_page.card2.bullet13}</li>
            </ul>
          </div>
        </div>

        {/* Card 3 */}
        <div className="project-page__body--card">
          <div className="project-page__body--text-left">
            <h3>{trans.project_page.card3.title}</h3>
            <ul>
              <li>{trans.project_page.card3.bullet1}</li>
              <li>{trans.project_page.card3.bullet2}</li>
              <li>{trans.project_page.card3.bullet3}</li>
              <li>{trans.project_page.card3.bullet4}</li>
              <li>{trans.project_page.card3.bullet5}</li>
              <li>{trans.project_page.card3.bullet6}</li>
              <li>{trans.project_page.card3.bullet7}</li>
              <li>{trans.project_page.card3.bullet8}</li>
              <li>{trans.project_page.card3.bullet9}</li>
              <li>{trans.project_page.card3.bullet10}</li>
            </ul>
          </div>
          <div className="project-page__body--image">
            <Image
              src={getAssetPath("/images/photos/vivol-gradas.jpg")}
              alt={trans?.alt?.project_image4 || "Volunteer with signs on some stairs"}
              fill
              style={{ objectFit: 'cover', objectPosition: "10% 80%" }}
            />
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