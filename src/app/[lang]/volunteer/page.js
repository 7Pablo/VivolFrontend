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
      <div className="volunteer__decision">
        <div className="volunteer__decision--background">
          <div className="volunteer__decision--half">
            <Image
              src="/images/photos/vivol-inter.jpg"
              alt={trans.alt.volunteer_background1}
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
            />
          </div>
          <div className="volunteer__decision--half">
            <Image
              src="/images/photos/vivol-nat.jpg"
              alt={trans.alt.volunteer_background2}
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
    </div>
  );
}