"use client";

import Slider from "react-slick";
import usePopularCuisines from "@/hooks/usePopularCuisines";
import CuisineCard from "../CuisineCard";
import CuisineCarouselSkeletonMoblie from "./CuisineCarouselSkeletonMoblie";
import useCarouselProgress from "@/hooks/useCarouselProgress";
import ProgressBar from "@/components/ProgressBar";

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
      <ProgressBar
        variant="secondary"
        progress={progress}
        extraClasses={"mb-0"}
      />
    </div>
  );
};

export default CuisineCarouselMobile;
