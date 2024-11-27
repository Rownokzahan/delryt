import { IoMdArrowDropright } from "react-icons/io";
import DishesSlider from "./DishesSlider";

const FreeDishes = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(`https://product-assets.faasos.io/eatsure/production/stickyHeaderCardTexturePhase4.svg`), linear-gradient(rgb(104, 26, 183) 13.85%, rgb(6, 4, 59) 100%)",
      }}
    >
      <div className="ui-container py-6 sm:py-10">
        <div className="flex justify-between text-white">
          <h3 className="text-lg sm:text-xl">
            FREE Dish for the{" "}
            <span
              className="font-bold bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(rgb(255, 245, 213) 26%, rgb(255, 222, 121) 85%)",
              }}
            >
              ELITE
            </span>
          </h3>
          <button className="ps-2 border-s flex items-center gap-1">
            <span className="font-semibold text-sm sm:text-base">See all</span>
            <IoMdArrowDropright className="text-xl" />
          </button>
        </div>

        <DishesSlider />
      </div>
    </div>
  );
};

export default FreeDishes;
