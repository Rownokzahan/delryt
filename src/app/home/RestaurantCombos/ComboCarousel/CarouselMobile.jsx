import ProgressBar from "@/components/ProgressBar";
import Slider from "react-slick";
import ComboCard from "../ComboCard";
import useCarouselProgress from "@/hooks/useCarouselProgress";

const CarouselMobile = ({ combos, openComboModal }) => {
  const slidesToShow = 1;
  const slidesToScroll = 1;
  const rowsPerSlide = 1;

  // Using custom hook to calculate slider progress
  const { progress, calculateProgress } = useCarouselProgress({
    items: combos,
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

  return (
    <>
      <Slider {...settings}>
        {combos.map((combo) => (
          <ComboCard
            key={combo.id}
            combo={combo}
            openComboModal={openComboModal}
          />
        ))}
      </Slider>

      <ProgressBar
        variant="primary"
        progress={progress}
        extraClasses={"mb-8 sm:hidden"}
      />
    </>
  );
};

export default CarouselMobile;
