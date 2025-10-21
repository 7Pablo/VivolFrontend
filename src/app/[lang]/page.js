// page.js (Homepage/Server component)

import Carousel from "@/components/Carousel";
import { getTranslations } from "locales/translations";
import MoreCard from "@/components/cards/MoreCard";
import CircleCard from "@/components/cards/CircleCard";
import Slider from "@/components/Slider";
import Image from "next/image";
import { getAssetPath } from '@/utils/getAssetPath';
import AnimatedSection from "@/utils/AnimatedSection";

// Metadata
export async function generateMetadata({ params }) {

  // Translations
  const { lang } = await params;
  const trans = await getTranslations(lang);

  // Canonical
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const path = `/${lang}`; 
  const canonicalUrl = `${baseUrl}${path}`;

  return {
    title: trans.metadata?.home.title || 'Vivol – Voluntariado internacional y en Perú',
    description: trans.metadata?.home.description || 'Conéctate a través del voluntariado en Perú o en el extranjero. Únete a Vivol y marca la diferencia.',
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

// HomePage
export default async function HomePage(props) {
  const params = await props.params;
  const lang = params?.lang || 'es'; 
  const trans = await getTranslations(lang);

  const carouselImages = [
    { src: getAssetPath("/images/photos/vivol-agua.webp"), alt: trans.alt.carousel_image, position: "50% 55%"},
    { src: getAssetPath("/images/photos/vivol-colores.webp"), alt: trans.alt.carousel_image, position: "50% 42%"},
    { src: getAssetPath("/images/photos/vivol-desierto.webp"), alt: trans.alt.carousel_image, position: "50% 48%"},
    { src: getAssetPath("/images/photos/vivol-manos.webp"), alt: trans.alt.carousel_image, position: "50% 47%"}
  ];

  const testimonials = [
    {
      imgSrc: getAssetPath("/images/photos/vivol-testimonio1.webp"),
      imgAlt: trans.alt.testimonials_img,
      name: "Juan Pablo Armendáriz", 
      body: trans.home_page.testimonial1,
      position: "50% 50%"
    },
    {
      imgSrc: getAssetPath("/images/photos/vivol-testimonio2.webp"),
      imgAlt: trans.alt.testimonials_img,
      name: "Lucie Bollmann", 
      body: trans.home_page.testimonial2,
      position: "50% 50%"
    },
    {
      imgSrc: getAssetPath("/images/photos/vivol-testimonio4.webp"),
      imgAlt: trans.alt.testimonials_img,
      name: "Arthur Parthier", 
      body: trans.home_page.testimonial4,
      position: "50% 50%"
    },
    {
      imgSrc: getAssetPath("/images/photos/vivol-testimonio5.webp"),
      imgAlt: trans.alt.testimonials_img,
      name: "Stephy Larrea Merlo", 
      body: trans.home_page.testimonial5,
      position: "50% 30%"
    },
    {
      imgSrc: getAssetPath("/images/photos/vivol-testimonio6.webp"),
      imgAlt: trans.alt.testimonials_img,
      name: "Maria Madori", 
      body: trans.home_page.testimonial6,
      position: "100% 30%"
    },
    {
      imgSrc: getAssetPath("/images/photos/vivol-testimonio7.webp"),
      imgAlt: trans.alt.testimonials_img,
      name: "Nicole Rodrigo Calderón", 
      body: trans.home_page.testimonial7,
      position: "60% 70%"
    },
    {
      imgSrc: getAssetPath("/images/photos/vivol-testimonio8.webp"),
      imgAlt: trans.alt.testimonials_img,
      name: trans.home_page.testimonial8_name, 
      body: trans.home_page.testimonial8,
      position: "50% 50%"
    },
    {
      imgSrc: getAssetPath("/images/photos/vivol-testimonio9.webp"),
      imgAlt: trans.alt.testimonials_img,
      name: "Daniela Chamorro", 
      body: trans.home_page.testimonial9,
      position: "50% 50%"
    },
    {
      imgSrc: getAssetPath("/images/photos/vivol-testimonio10.webp"),
      imgAlt: trans.alt.testimonials_img,
      name: "Desiree Meregildo Palomino", 
      body: trans.home_page.testimonial10,
      position: "50% 40%"
    },
    {
      imgSrc: getAssetPath("/images/photos/vivol-testimonio11.webp"),
      imgAlt: trans.alt.testimonials_img,
      name: "Gabriel Larrea Merlo", 
      body: trans.home_page.testimonial11,
      position: "30% 50%"
    },
    {
      imgSrc: getAssetPath("/images/photos/vivol-testimonio12.webp"),
      imgAlt: trans.alt.testimonials_img,
      name: "Gloria Boza", 
      body: trans.home_page.testimonial12,
      position: "50% 60%"
    },
    {
      imgSrc: getAssetPath("/images/photos/vivol-testimonio3.webp"),
      imgAlt: trans.alt.testimonials_img,
      name: "Laura Martin",
      body: trans.home_page.testimonial3,
      position: "50% 100%"
    },
  ];

  return (
    <div className="home-page">

      <h1 className="sr-only">{trans.home_page.title}</h1>

      {/* Carousel */}
      <Carousel 
        imageLinks={carouselImages}
        translations={trans}
      />

      {/* Get involve */}
      <div className="home-page__involve">
        <AnimatedSection animation="fadeInUp" delay={0.2}>
          <h3>{trans.home_page.get_involved}</h3>
        </AnimatedSection>
        <div className="home-page__involve--cards">
          <AnimatedSection animation="flipCard" delay={0.2}>
            <MoreCard
              imgSrc={getAssetPath("/images/photos/vivol-ninos.webp")}
              imgAlt={trans.alt.more_image1}
              imgText={trans.home_page.more_image1}
              title={trans.home_page.more_title1}
              bodyText={trans.home_page.more_body1}
              color="#85AF59"
              route="volunteer"
              imgPosition="50% 32%"
            />
          </AnimatedSection>
          <AnimatedSection animation="flipCard" delay={0.4}>
            <MoreCard
              imgSrc={getAssetPath("/images/photos/vivol-familia.webp")}
              imgAlt={trans.alt.more_image2}
              imgText={trans.home_page.more_image2}
              title={trans.home_page.more_title2}
              bodyText={trans.home_page.more_body2}
              color="#D53686"
              route="involve/family"
              imgPosition="50% 50%"
            />
          </AnimatedSection>
          <AnimatedSection animation="flipCard" delay={0.6}>
            <MoreCard
              imgSrc={getAssetPath("/images/photos/vivol-montana.webp")}
              imgAlt={trans.alt.more_image3}
              imgText={trans.home_page.more_image3}
              title={trans.home_page.more_title3}
              bodyText={trans.home_page.more_body3}
              color="#1583F0"
              route="involve/project"
              imgPosition="50% 30%"
            />
          </AnimatedSection>
        </div>
      </div>

      {/* Slogan */}
      <div className="home-page__quote">
        <div className="home-page__quote--fade">
          <Image
            src={getAssetPath("/images/photos/papel.webp")}
            alt={trans.alt.quote1}
            fill
            style={{ objectFit: 'cover' }}
            quality={100}
          />
        </div>
        <div className="home-page__slogan--content">
          <AnimatedSection animation="pivotShakeFadeIn" delay={0.2}>
            <Image
                src={getAssetPath('/images/icons/megaphone.svg')}
                alt="Megaphone icon"
                width={50}
                height={50}
                className="home-page__slogan--icon"
            />
          </AnimatedSection>
          <AnimatedSection animation="squashStretch" delay={0.2}>
            <h4>{trans.home_page.slogan}</h4>
          </AnimatedSection>
        </div>
      </div>

      {/* Volunteering */}
      <div className="home-page__volunteering">
        <AnimatedSection animation="fadeInUp" delay={0.2}>
          <h3>{trans.home_page.title}</h3>
        </AnimatedSection>
        <div className="home-page__volunteering--cards">
          <AnimatedSection animation="bouncingBall" delay={0.2}>
            <CircleCard
              icon={getAssetPath("/images/icons/group.png")}
              alt="Bulb icon"
              text={trans.home_page.start_now}
              color="#85AF59"
              route="volunteer"
            />
          </AnimatedSection>
          <AnimatedSection animation="bouncingBall" delay={0.4}>
            <CircleCard
              icon={getAssetPath("/images/icons/docs.png")}
              alt="Documents icon"
              text={trans.home_page.documents}
              color="#D53686"
              route="documents"
            />
          </AnimatedSection>
          <AnimatedSection animation="bouncingBall" delay={0.6}>
            <CircleCard
              icon={getAssetPath("/images/icons/travel.png")}
              alt="Plane icon"
              text={trans.home_page.destinations}
              color="#1583F0"
              route="volunteer/international"
            />
          </AnimatedSection>
        </div>
      </div>  

      {/* Testimonials */}
      <div className="home-page__testimonials">
        <Image 
          src={getAssetPath("/images/photos/colaboration.webp")}
          alt={trans.alt.colaboration}
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          className="home-page__testimonials--background"
        />
        <div className="home-page__testimonials--overlay">
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <h3>{trans.home_page.testimonials}</h3>
          </AnimatedSection>
          <AnimatedSection animation="tickerFadeInUp" delay={0.2}>
            <Slider slides={testimonials}/>
          </AnimatedSection>
        </div>
      </div>

      {/* Alliances */}
      <div className="home-page__alliances">
        <AnimatedSection animation="fadeInUp" delay={0.2}>
          <h3>{trans.home_page.alliances}</h3>
        </AnimatedSection>
        <div className="home-page__alliances--content">
          <AnimatedSection animation="slideFromBottom">
            <div className="home-page__alliances--alliance">
              <div className="home-page__alliances--wrapper">
                <Image
                  className="home-page__alliances--icye"
                  src={getAssetPath("/images/photos/icye-logo.webp")}
                  alt="ICYE logo"
                  height={400}
                  width={400}
                />
              </div>
              <h2>ICYE</h2>
              <h3>International Cultural Youth Exchange</h3>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="slideFromBottom">
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
          </AnimatedSection>
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