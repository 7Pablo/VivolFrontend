// page.js (Homepage/Server component)

import Carousel from "@/components/Carousel";
import { getTranslations } from "locales/translations";
import MoreCard from "@/components/cards/MoreCard";
import CircleCard from "@/components/cards/CircleCard";
import Slider from "@/components/Slider";
import Image from "next/image";
import { getAssetPath } from '@/utils/getAssetPath';

export default async function HomePage(props) {
  const params = await props.params;
  const lang = params?.lang || 'es'; 
  const trans = await getTranslations(lang);

  const carouselImages = [
    { src: getAssetPath("/images/photos/vivol-agua.jpg"), alt: trans.alt.carousel_image, position: "50% 55%"},
    { src: getAssetPath("/images/photos/vivol-colores.jpeg"), alt: trans.alt.carousel_image, position: "50% 42%"},
    { src: getAssetPath("/images/photos/vivol-desierto.jpg"), alt: trans.alt.carousel_image, position: "50% 48%"},
    { src: getAssetPath("/images/photos/vivol-manos.jpg"), alt: trans.alt.carousel_image, position: "50% 47%"}
  ];

  const testimonials = [
    {
      imgSrc: getAssetPath("/images/photos/vivol-testimonio1.jpg"),
      imgAlt: trans.alt.testimonials_img,
      name: "Juan Pablo Armendáriz", 
      body: trans.home_page.testimonial1,
      position: "50% 50%"
    },
    {
      imgSrc: getAssetPath("/images/photos/vivol-test3.jpeg"),
      imgAlt: trans.alt.testimonials_img,
      name: "Laura Martin",
      body: trans.home_page.testimonial3,
      position: "50% 100%"
    },
  ];

  return (
    <div className="home-page">

      {/* Carousel */}
      <Carousel imageLinks={carouselImages}/>

      {/* Get involve */}
      <div className="home-page__involve">
        <h3>{trans.home_page.get_involved}</h3>
        <div className="home-page__involve--cards">
          <MoreCard
            imgSrc={getAssetPath("/images/photos/vivol-ninos.JPG")}
            imgAlt={trans.alt.more_image1}
            imgText={trans.home_page.more_image1}
            title={trans.home_page.more_title1}
            bodyText={trans.home_page.more_body1}
            color="#85AF59"
            route="volunteer"
            imgPosition="50% 32%"
          />
          <MoreCard
            imgSrc={getAssetPath("/images/photos/vivol-familia.jpg")}
            imgAlt={trans.alt.more_image2}
            imgText={trans.home_page.more_image2}
            title={trans.home_page.more_title2}
            bodyText={trans.home_page.more_body2}
            color="#D53686"
            route="involve/family"
            imgPosition="50% 50%"
          />
          <MoreCard
            imgSrc={getAssetPath("/images/photos/vivol-montana.jpg")}
            imgAlt={trans.alt.more_image3}
            imgText={trans.home_page.more_image3}
            title={trans.home_page.more_title3}
            bodyText={trans.home_page.more_body3}
            color="#1583F0"
            route="involve/project"
            imgPosition="50% 30%"
          />
        </div>
      </div>

      {/* Slogan */}
      <div className="home-page__quote">
        <div className="home-page__quote--fade">
          <Image
            src={getAssetPath("/images/photos/papel.jpg")}
            alt={trans.alt.quote1}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="home-page__slogan--content">
          <Image
              src={getAssetPath('/images/icons/megaphone.svg')}
              alt="QMegaphone icon"
              width={50}
              height={50}
              className="home-page__slogan--icon"
          />
          <h4>{trans.home_page.slogan}</h4>
        </div>
      </div>

      {/* Volunteering */}
      <div className="home-page__volunteering">
        <h3>{trans.home_page.title}</h3>
        <div className="home-page__volunteering--cards">
          <CircleCard
            icon={getAssetPath("/images/icons/group.png")}
            alt="Bulb icon"
            text={trans.home_page.start_now}
            color="#85AF59"
            route="volunteer"
          />
          <CircleCard
            icon={getAssetPath("/images/icons/docs.png")}
            alt="Documents icon"
            text={trans.home_page.documents}
            color="#D53686"
            route="documents"
          />
          <CircleCard
            icon={getAssetPath("/images/icons/travel.png")}
            alt="Plane icon"
            text={trans.home_page.destinations}
            color="#1583F0"
            route="volunteer/international"
          />
        </div>
      </div>  

      {/* Testimonials */}
      <div className="home-page__testimonials">
        <Image 
          src={getAssetPath("/images/photos/colaboration.jpg")}
          alt={trans.alt.colaboration}
          layout="fill"
          objectFit="cover"
          quality={100}
          className="home-page__testimonials--background"
        />
        <div className="home-page__testimonials--overlay">
          <h3>{trans.home_page.testimonials}</h3>
          <Slider slides={testimonials}/>
        </div>
      </div>

      {/* Alliances */}
      <div className="home-page__alliances">
        <h3>{trans.home_page.alliances}</h3>
        <div className="home-page__alliances--content">
          <div className="home-page__alliances--alliance">
            <div className="home-page__alliances--wrapper">
              <Image
                className="home-page__alliances--icye"
                src={getAssetPath("/images/photos/icye-logo.png")}
                alt="ICYE logo"
                height={400}
                width={400}
              />
            </div>
            <h2>ICYE</h2>
            <h3>International Cultural Youth Exchange</h3>
          </div>
          <div className="home-page__alliances--alliance">
            <div className="home-page__alliances--wrapper">
              <Image
                className="home-page__alliances--unir"
                src={getAssetPath("/images/photos/unir.svg")}
                alt="ICYE logo"
                height={400}
                width={400}
              />
            </div>
            <h2>UNIR</h2> 
            <h3>Universidad Internacional de la Rioja</h3>
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