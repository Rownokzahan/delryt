import Button from "@/components/Button";
import CuisineCarouselMobile from "./CuisineCarouselMobile";
import { IoChevronForward } from "react-icons/io5";

const PopularCuisinesMobile = () => {
  return (
    <div className="ui-container bg-primary py-8">
      <h3 className="mb-4 text-white text-2xl font-semibold text-center">
        Popular Cuisines
      </h3>

      <CuisineCarouselMobile />

      <Button variant="secondary-outline" className="h-max gap-2 mx-auto mt-6">
        <span>Explore All Dishes</span>
        <IoChevronForward className="text-lg" />
      </Button>
    </div>
  );
};

export default PopularCuisinesMobile;
