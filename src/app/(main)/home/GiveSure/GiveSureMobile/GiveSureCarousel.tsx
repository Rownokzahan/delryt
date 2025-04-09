"use client";

import Image from "next/image";
import Slider from "react-slick";

interface ImageData {
  src: string;
  alt: string;
}

const images: ImageData[] = [
  {
    src: "https://assets.faasos.io/eatsure/production/updated_givesure_one.jpg?d=375&tr=w-0.5,h-0.5",
    alt: "Give Sure one",
  },
  {
    src: "https://assets.faasos.io/eatsure/production/updated_givesure_two.jpg?d=375&tr=w-0.5,h-0.5",
    alt: "Give Sure two",
  },
  {
    src: "https://assets.faasos.io/eatsure/production/updated_givesure_three.jpg?d=375&tr=w-0.5,h-0.5",
    alt: "Give Sure three",
  },
];

const GiveSureCarousel = () => {
  const settings = {
    infinite: false,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    speed: 500,
    dots: false,
    arrows: false,
  };

  return (
    <div className="my-8 -mx-3">
      <Slider {...settings}>
        {images.map((image, index) => (
          <Image
            key={index}
            width={400}
            height={450}
            src={image.src}
            alt={image.alt}
            className="w-full aspect-8/9 px-3 object-cover"
          />
        ))}
      </Slider>
    </div>
  );
};

export default GiveSureCarousel;
