// page.js (Contact Page/ Server component)

import { getTranslations } from "locales/translations";
import Button from "@/components/buttons/Button";
import FoldButton from "@/components/buttons/FoldButton";

export default async function ContactPage(props) {
  const params = await props.params;
  const lang = params?.lang || 'es'; 
  const trans = await getTranslations(lang);

  return (
    <div className="contact-page">
      
    </div>
  );
}