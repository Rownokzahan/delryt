"use client";

import Slider from "react-slick";
import BrandCardMobile from "./BrandCardMobile";

const BrandCarouselMobile = ({ brandData }) => {
  const settings = {
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    speed: 500,
    rows: 2,
    dots: false,
  };

  return (
    <div className="overflow-hidden mt-4">
      <Slider {...settings}>
        {brandData.map((brand) => (
          <BrandCardMobile key={brand.id} brand={brand} />
        ))}
      </Slider>
    </div>
  );
};

export default BrandCarouselMobile;
