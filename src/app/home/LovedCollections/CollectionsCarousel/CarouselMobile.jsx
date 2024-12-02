import Slider from "react-slick";
import useCarouselProgress from "@/hooks/useCarouselProgress";
import ProgressBar from "@/components/ProgressBar";
import CollectionCard from "../CollectionCard";

const CarouselMobile = ({ collections }) => {
  const slidesToShow = 2;
  const slidesToScroll = 1;
  const rowsPerSlide = 2;

  // Using custom hook to calculate slider progress
  const { progress, calculateProgress } = useCarouselProgress({
    items: collections,
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
        {collections.map((collection) => (
          <CollectionCard key={collection.id} collection={collection} />
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
