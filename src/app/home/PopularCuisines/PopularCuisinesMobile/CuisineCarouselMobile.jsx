"use client";

import { useState, useEffect } from "react";
import Slider from "react-slick";
import usePopularCuisines from "@/hooks/usePopularCuisines";
import CuisineCard from "../CuisineCard";
import CuisineCarouselSkeletonMoblie from "./CuisineCarouselSkeletonMoblie";

const CuisineCarouselMobile = () => {
  const { data: cuisines = [], loading } = usePopularCuisines();
  const [progress, setProgress] = useState(0);

  // Function to calculate progress
  const calculateProgress = (currentIndex) => {
    // Calculate the total number of slides (each slide shows 2 cuisines).
    const totalSlides = Math.ceil(cuisines.length / 2 - 1); // Subtract 1 for incomplete slide groups

    const progressPercent = ((currentIndex + 1) / totalSlides) * 100;
    setProgress(progressPercent);
  };

  // Slider settings
  const settings = {
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 500,
    rows: 2,
    dots: false,
    arrows: false,
    beforeChange: (current, nextIndex) => {
      calculateProgress(nextIndex); // Update progress based on the next slide
    },
  };

  useEffect(() => {
    // Initialize progress when data is loaded and a slide is visible
    if (cuisines.length > 0) {
      // Start progress based on the first visible slide (0 index)
      calculateProgress(0);
    }
  }, [cuisines]); // Recalculate progress when cuisines data is loaded or changes

  if (loading) {
    return <CuisineCarouselSkeletonMoblie />;
  }

  return (
    <div>
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
