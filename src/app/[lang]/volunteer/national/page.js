// page.js (National Volunteer Page/Server component)

import { getTranslations } from "locales/translations";

export default async function NationalPage(props) {
  const params = await props.params;
  const lang = params?.lang || 'es'; 
  const trans = await getTranslations(lang);
  
  return (
    <div className="national-page">
      <h1>National volunteering</h1>
    </div>
  );
}