import useCarouselProgress from "@/hooks/useCarouselProgress";
import Slider from "react-slick";
import ProgressBar from "@/components/ui/ProgressBar";
import { Cuisine } from "@/types";
import CuisineCard from "../../CuisineCard";

interface CuisineCarouselMobileProps {
  cuisines: Cuisine[];
}

const CuisineCarouselMobile = ({ cuisines }: CuisineCarouselMobileProps) => {
  const slidesToShow = 2;
  const slidesToScroll = 1;
  const rowsPerSlide = 2;

  // Using custom hook to calculate slider progress
  const { progress, calculateProgress } = useCarouselProgress({
    totalItems: cuisines.length,
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
    beforeChange: (current: number, nextIndex: number) => {
      calculateProgress(nextIndex); // Update progress based on the next slide
    },
  };

  return (
    <div className="sm:hidden">
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
