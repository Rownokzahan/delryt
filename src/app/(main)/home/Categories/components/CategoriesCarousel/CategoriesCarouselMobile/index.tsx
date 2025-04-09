import ProgressBar from "@/components/ui/ProgressBar";
import useCarouselProgress from "@/hooks/useCarouselProgress";
import { Category } from "@/types";
import Slider from "react-slick";
import CategoryCard from "../../CategoryCard";

interface CategoriesCarouselMobileProps {
  categories: Category[];
}

const CategoriesCarouselMobile = ({
  categories,
}: CategoriesCarouselMobileProps) => {
  const slidesToShow = 2;
  const slidesToScroll = 1;
  const rowsPerSlide = 2;

  // Using custom hook to calculate slider progress
  const { progress, calculateProgress } = useCarouselProgress({
    totalItems: categories.length,
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
      <Slider {...settings}>
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </Slider>

      <ProgressBar
        variant="primary"
        progress={progress}
        extraClasses={"mb-8 sm:hidden"}
      />
    </div>
  );
};

export default CategoriesCarouselMobile;
