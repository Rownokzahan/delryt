"use client";

import Slider from "react-slick";
import BrandCardMobile from "./BrandCardMobile";
import useBrands from "@/hooks/useBrands";
import BrandCarouselMobileSkeleton from "./BrandCarouselMobileSkeleton";

const BrandCarouselMobile = () => {
  const { data: brands, loading } = useBrands();

  if (loading) {
    return <BrandCarouselMobileSkeleton />;
  }

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
        {brands?.map((brand) => (
          <BrandCardMobile key={brand.id} brand={brand} />
        ))}
      </Slider>
    </div>
  );
};

export default BrandCarouselMobile;
