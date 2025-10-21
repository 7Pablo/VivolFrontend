// page.js (Involve Page/ Server component) 

import Image from "next/image";
import { getTranslations } from "locales/translations";
import SelectCard from "@/components/cards/SelectCard";
import { getAssetPath } from "@/utils/getAssetPath";
import AnimatedSection from "@/utils/AnimatedSection";

// Metadata
export async function generateMetadata({ params }) {

  // Translations
  const { lang } = await params;
  const trans = await getTranslations(lang);

  // Canonical
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const path = `/${lang}/involve`; 
  const canonicalUrl = `${baseUrl}${path}`;
  
  return {
    title: trans.metadata?.involve.title || 'Involúcrate – Familias anfitrionas y proyectos – Vivol',
    description: trans.metadata?.involve.description || 'Descubre cómo ser parte de Vivol como familia anfitriona o registrando tu proyecto.',
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

// InvolvePage
export default async function InvolvePage(props) {
  const params = await props.params;
  const lang = params?.lang || 'es'; 
  const trans = await getTranslations(lang);

  return (
    <div className="involve-page">
      <Image
          src={getAssetPath("/images/photos/vivol-siete.webp")}
          alt={trans?.alt?.involve_image1 || "Rainbow Mountain, Peru"}
          fill
          style={{ objectFit: 'cover' }}
        />
      <div className="involve-page__overlay">
        <div className="involve-page__text">
          <AnimatedSection animation="slideFromLeft" delay={0.2}> 
            <h1>{trans.involve_page.title}</h1>
          </AnimatedSection>
          <AnimatedSection animation="slideFromLeft" delay={0.4}> 
            <p>{trans.involve_page.body}</p>
          </AnimatedSection>
        </div>
        <AnimatedSection animation="squashStretch" delay={0.2} className="animated-section">
          <div className="involve-page__cards">
            <SelectCard
              image={getAssetPath("/images/photos/vivol-selfie.webp")}
              alt={trans.alt.involve_image2}
              title={trans.involve_page.card1}
              backGroundColor="#fff"
              textColor="#2087C9"
              route="involve/family"
              position="50% 0%"
            />
            <SelectCard
              image={getAssetPath("/images/photos/vivol-sombrero.webp")}
              alt={trans.alt.involve_image3}
              title={trans.involve_page.card2}
              backGroundColor="#2087C9"
              textColor="#fff"
              route="involve/project"
              position="50% 45%"
            />
          </div>
        </AnimatedSection>
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