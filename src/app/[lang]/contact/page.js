// page.js (Contact Page/ Server component)

import { getTranslations } from "locales/translations";
import FoldButton from "@/components/buttons/FoldButton";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default async function ContactPage(props) {

  // Translation
  const params = await props.params;
  const lang = params?.lang || 'es'; 
  const trans = await getTranslations(lang);

  return (
    <div className="contact-page">
      <div className="contact-page__card">

        {/* Card left */}
        <div className="contact-page__left">
          <div className="contact-page__left--top">
            <h3>{trans.contact_page.title}</h3>
            <p>{trans.contact_page.text}</p>
          </div>

          <hr/>
          
          <div className="contact-page__left--middle">
            <div className="contact-page__left--social">
              <Image
                src="/images/icons/location-blue.svg"
                alt="Location icon"
                height={30}
                width={30}
              />
              <p>{trans.contact_page.location}</p>
            </div>
            <div className="contact-page__left--social">
              <Image
                src="/images/icons/phone-blue.svg"
                alt="Phone icon"
                height={30}
                width={30}
              />
              <p>(+51) 903211488</p>
            </div>
            <div className="contact-page__left--social">
              <Image
                src="/images/icons/mail-blue.svg"
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
                src="/images/icons/instagram-blue.svg"
                alt="Vivol Instagram"
                text="Instagram"
                link="https://www.instagram.com/vivol_peru/"
                color="#626161"
            />
            <FoldButton 
                src="/images/icons/tiktok-blue.svg"
                alt="Vivol Tik Tok"
                text="Tik Tok"
                link="https://www.tiktok.com/@vivol_peru?lang=es"
                color="#626161"
            />
            <FoldButton 
                src="/images/icons/facebook-blue.svg"
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
    </div>
  );
}