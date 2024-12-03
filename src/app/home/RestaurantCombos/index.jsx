import Button from "@/components/Button";
import { IoChevronForward } from "react-icons/io5";
import ComboCarousel from "./ComboCarousel";

const RestaurantCombos = () => {
  return (
    <section className="ui-container pt-12 pb-24 sm:pb-12 relative">
      <div className="mb-6 flex items-center justify-between">
        {/* Section Title */}
        <h3 className="text-2xl capitalize">
          <span>Combos from</span>{" "}
          <span className="font-semibold">Multiple Restaurants</span>
        </h3>

        {/* Explore All Combos Button */}
        <Button
          variant="secondary"
          className="h-max w-[calc(100%-16px)] sm:w-auto gap-2 absolute bottom-12 left-1/2 -translate-x-1/2 sm:static sm:translate-x-0"
        >
          <span>Explore All Combos</span>
          <IoChevronForward className="text-lg" />
        </Button>
      </div>

      {/* Combo Carousel */}
      <ComboCarousel />
    </section>
  );
};

export default RestaurantCombos;
