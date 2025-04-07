// page.js (Homepage/Server component)

import Carousel from "@/components/Carousel";
import { getTranslations } from "locales/translations";
import MoreCard from "@/components/cards/MoreCard";
import Image from "next/image";

export default async function HomePage(props) {
  const params = await props.params;
  const lang = params?.lang || 'es'; 
  const trans = await getTranslations(lang);

  const carouselImages = [
    { src: "/images/photos/vivol-agua.jpg", alt: trans.alt.carousel_image, position: "50% 55%"},
    { src: "/images/photos/vivol-colores.jpeg", alt: trans.alt.carousel_image, position: "50% 42%"},
    { src: "/images/photos/vivol-desierto.jpg", alt: trans.alt.carousel_image, position: "50% 48%"},
    { src: "/images/photos/vivol-manos.jpg", alt: trans.alt.carousel_image, position: "50% 47%"}
  ];

  return (
    <div className="home-page">
      <Carousel imageLinks={carouselImages}/>
      <div className="home-page__involve">
        <h3>{trans.home_page.get_involved}</h3>
        <div className="home-page__involve--cards">
          <MoreCard
            imgSrc="/images/photos/vivol-ninos.JPG"
            imgAlt={trans.alt.more_image1}
            imgText={trans.home_page.more_image1}
            title={trans.home_page.more_title1}
            bodyText={trans.home_page.more_body1}
            color="#00BF4C"
            route="volunteer"
            imgPosition="50% 32%"
          />
          <MoreCard
            imgSrc="/images/photos/vivol-familia.jpg"
            imgAlt={trans.alt.more_image2}
            imgText={trans.home_page.more_image2}
            title={trans.home_page.more_title2}
            bodyText={trans.home_page.more_body2}
            color="#B490F0"
            route="involve/family"
            imgPosition="50% 50%"
          />
          <MoreCard
            imgSrc="/images/photos/vivol-montana.jpg"
            imgAlt={trans.alt.more_image3}
            imgText={trans.home_page.more_image3}
            title={trans.home_page.more_title3}
            bodyText={trans.home_page.more_body3}
            color="#1683F0"
            route="involve/project"
            imgPosition="50% 30%"
          />
        </div>
      </div>
      <div className="home-page__quote">
        <Image 
          src="/images/photos/paper.jpg"
          alt={trans.alt.quote1}  
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="home-page__quote--content">
          <Image
              src='/images/icons/quotes.svg'
              alt="Quote icon"
              width={50}
              height={50}
              priority
              className="home-page__quote--icon"
          />
          <h3>{trans.home_page.quote}</h3>
          <p>— Audrey Hepburn</p>
        </div>
      </div>
    </div>
  );
}