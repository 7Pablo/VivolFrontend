// page.js (Contact Page/ Server component)

import { getTranslations } from "locales/translations";
import FoldButton from "@/components/buttons/FoldButton";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { getAssetPath } from "@/utils/getAssetPath";
import AnimatedSection from "@/utils/AnimatedSection";

// Metadata
export async function generateMetadata({ params }) {

  // Translations
  const { lang } = await params;
  const trans = await getTranslations(lang);

  // Canonical
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const path = `/${lang}/contact`; 
  const canonicalUrl = `${baseUrl}${path}`;
  
  return {
    title: trans.metadata?.contact.title || 'Contacto – Vivol',
    description: trans.metadata?.contact.description || 'Comunícate con Vivol para preguntas, alianzas o oportunidades de voluntariado.',
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

// ContactPage
export default async function ContactPage(props) {

  // Translation
  const params = await props.params;
  const lang = params?.lang || 'es'; 
  const trans = await getTranslations(lang);

  return (
    <div className="contact-page">
      <AnimatedSection animation="bouncyRise" delay={0.2}>
        <div className="contact-page__card">

          {/* Card left */}
          <div className="contact-page__left">
            <div className="contact-page__left--top">
              <h1>{trans.contact_page.title}</h1>
              <p>{trans.contact_page.text}</p>
            </div>
            <hr/>
        
            <div className="contact-page__left--middle">
              <div className="contact-page__left--social">
                <Image
                  src={getAssetPath("/images/icons/location-blue.svg")}
                  alt="Location icon"
                  height={30}
                  width={30}
                />
                <p>{trans.contact_page.location}</p>
              </div>
              <div className="contact-page__left--social">
                <Image
                  src={getAssetPath("/images/icons/phone-blue.svg")}
                  alt="Phone icon"
                  height={30}
                  width={30}
                />
                <p>(+51) 903211488</p>
              </div>
              <div className="contact-page__left--social">
                <Image
                  src={getAssetPath("/images/icons/mail-blue.svg")}
                  alt="Mail icon"
                  height={30}
                  width={30}
                />
                <p>info@vidayvoluntariado.org</p>
              </div>
            </div>
            <hr/>
            <div className="contact-page__left--bottom">
              <FoldButton
                  src={getAssetPath("/images/icons/instagram-blue.svg")}
                  alt="Vivol Instagram"
                  text="Instagram"
                  link="https://www.instagram.com/vivol_peru/"
                  color="#626161"
              />
              <FoldButton
                  src={getAssetPath("/images/icons/tiktok-blue.svg")}
                  alt="Vivol Tik Tok"
                  text="Tik Tok"
                  link="https://www.tiktok.com/@vivol_peru?lang=es"
                  color="#626161"
              />
              <FoldButton
                  src={getAssetPath("/images/icons/facebook-blue.svg")}
                  alt="Vivol Facebook"
                  text="Facebook"
                  link="https://www.facebook.com/profile.php?id=100080244291572"
                  color="#626161"
              />
            </div>
          </div>
          
          {/* Card right */}
          <div className="contact-page__right">
            <ContactForm
              data={trans.contact_page}
              buttonText={trans.button.send}
            />
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'es' },
  ];
}