// page.js (International Volunteer Page/Server component)

import Image from "next/image";
import { getTranslations } from "locales/translations";

export default async function InternationalPage(props) {
  const params = await props.params;
  const lang = params?.lang || 'es'; 
  const trans = await getTranslations(lang);

  return (
    <div>
      <h1>International volunteering</h1>
    </div>
  );
}