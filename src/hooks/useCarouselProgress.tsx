import { useState, useEffect } from "react";

interface CarouselProgressProps {
  totalItems: number;
  slidesToShow?: number;
  slidesToScroll?: number;
  rowsPerSlide?: number;
}

const useCarouselProgress = ({
  totalItems,
  slidesToShow = 1,
  slidesToScroll = 1,
  rowsPerSlide = 1,
}: CarouselProgressProps) => {
  const [progress, setProgress] = useState(0);

  const calculateProgress = (currentIndex: number) => {
    // Calculate the total number of slides based on the number of items, rows, and visible items per slide
    const totalSlides = Math.ceil(
      totalItems / rowsPerSlide - (slidesToShow - slidesToScroll)
    );

    // Calculate the progress percentage based on the current index
    const progressPercent = ((currentIndex + 1) / totalSlides) * 100;

    setProgress(progressPercent);
  };

  useEffect(() => {
    // Initialize progress based on the first visible slide (0 index)
    if (totalItems > 0) {
      calculateProgress(0);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalItems]);

  return { progress, calculateProgress };
};

export default useCarouselProgress;
