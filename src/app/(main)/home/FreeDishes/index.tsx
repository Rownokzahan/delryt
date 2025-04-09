import { IoMdArrowDropright } from "react-icons/io";
import FreeDishSlider from "./components/FreeDishSlider";

const FreeDishes = () => {
  return (
    <section className="bg-linear-to-t from-primary-dark via-primary to-primary-light">
      <div className="ui-container py-6 sm:py-10">
        <div className="flex justify-between text-uiWhite">
          <h3 className="text-lg sm:text-xl">
            <span>FREE Dish for the</span>
            <span
              className="ms-1 font-bold bg-clip-text text-transparent"
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

        <FreeDishSlider />
      </div>
    </section>
  );
};

export default FreeDishes;
