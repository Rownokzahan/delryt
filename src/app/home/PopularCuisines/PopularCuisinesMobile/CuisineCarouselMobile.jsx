"use client";

import Slider from "react-slick";
import usePopularCuisines from "@/hooks/usePopularCuisines";
import CuisineCard from "../CuisineCard";
import CuisineCarouselSkeletonMoblie from "./CuisineCarouselSkeletonMoblie";
import useCarouselProgress from "@/hooks/useCarouselProgress";

const CuisineCarouselMobile = () => {
  const { data: cuisines = [], loading } = usePopularCuisines();

  const slidesToShow = 2;
  const slidesToScroll = 1;
  const rowsPerSlide = 2;

  // Using custom hook to calculate slider progress
  const { progress, calculateProgress } = useCarouselProgress({
    items: cuisines,
    slidesToShow,
    slidesToScroll,
    rowsPerSlide,
  });

  // Slider settings
  const settings = {
    infinite: false,
    slidesToShow,
    slidesToScroll,
    speed: 500,
    rows: rowsPerSlide,
    dots: false,
    arrows: false,
    beforeChange: (current, nextIndex) => {
      calculateProgress(nextIndex); // Update progress based on the next slide
    },
  };

  if (loading) {
    return <CuisineCarouselSkeletonMoblie />; // Display skeleton while loading
  }

  return (
    <div>
      {/* Slider */}
      <Slider {...settings}>
        {cuisines.map((cuisine, index) => (
          <div key={index}>
            <CuisineCard cuisine={cuisine} />
          </div>
        ))}
      </Slider>

      {/* Progress Bar */}
      <div className="w-2/3 h-1 mt-4 mx-auto rounded-full bg-gray-300">
        <div
          className="h-1 bg-secondary rounded-full duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default CuisineCarouselMobile;
