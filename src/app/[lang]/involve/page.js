// page.js (Involve Page/ Server component) 

import Image from "next/image";
import { getTranslations } from "locales/translations";
import SelectCard from "@/components/cards/SelectCard";
import { getAssetPath } from "@/utils/getAssetPath";

export default async function InvolvePage(props) {
  const params = await props.params;
  const lang = params?.lang || 'es'; 
  const trans = await getTranslations(lang);

  return (
    <div className="involve-page">
      <Image
          src={getAssetPath("/images/photos/vivol-siete.jpg")}
          alt={trans?.alt?.involve_image1 || "Rainbow Mountain, Peru"}
          fill
          style={{ objectFit: 'cover' }}
        />
      <div className="involve-page__overlay">
        <div className="involve-page__text">
          <h2>{trans.involve_page.title}</h2>
          <p>{trans.involve_page.body}</p>
        </div>
        <div className="involve-page__cards">
          <SelectCard
            image={getAssetPath("/images/photos/vivol-selfie.jpg")}
            alt={trans.alt.involve_image2}
            title={trans.involve_page.card1}
            backGroundColor="#fff"
            textColor="#2087C9"
            route="involve/family"
            position="50% 0%"
          />
          <SelectCard
            image={getAssetPath("/images/photos/vivol-sombrero.jpg")}
            alt={trans.alt.involve_image3}
            title={trans.involve_page.card2}
            backGroundColor="#2087C9"
            textColor="#fff"
            route="involve/project"
            position="50% 45%"
          />
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