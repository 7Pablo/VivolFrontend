// page.js (Homepage/Server component)

import Carousel from "@/components/Carousel";

export default async function HomePage(props) {
  const params = await props.params;
  const lang = params?.lang || 'es'; 

  const carouselImages = [
    { src: "/images/photos/vivol-agua.jpg", alt: "Image 1", position: "50% 55%"},
    { src: "/images/photos/vivol-colores.jpeg", alt: "Image 2", position: "50% 42%"},
    { src: "/images/photos/vivol-desierto.jpg", alt: "Image 3", position: "50% 48%"},
    { src: "/images/photos/vivol-manos.jpg", alt: "Image 4", position: "50% 47%"}
  ];

  return (
    <div className="home-page">
      <Carousel imageLinks={carouselImages}/>
    </div>
  );
}