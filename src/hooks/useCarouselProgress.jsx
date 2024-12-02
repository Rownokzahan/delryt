import { useState, useEffect } from "react";

const useCarouselProgress = ({
  items,
  slidesToShow = 1,
  slidesToScroll = 1,
  rowsPerSlide = 1,
}) => {
  const [progress, setProgress] = useState(0);

  const calculateProgress = (currentIndex) => {
    // Calculate the total number of slides based on the number of items, rows, and visible items per slide
    const totalSlides = Math.ceil(
      items.length / rowsPerSlide - (slidesToShow - slidesToScroll)
    );

    // Calculate the progress percentage based on the current index
    const progressPercent = ((currentIndex + 1) / totalSlides) * 100;

    setProgress(progressPercent);
  };

  useEffect(() => {
    // Initialize progress based on the first visible slide (0 index)
    if (items.length > 0) {
      calculateProgress(0);
    }
  }, [items]);

  return { progress, calculateProgress };
};

export default useCarouselProgress;
