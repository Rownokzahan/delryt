import PopularCuisinesDesktop from "./PopularCuisinesDesktop";
import PopularCuisinesMobile from "./PopularCuisinesMobile";

const PopularCuisines = () => {
  return (
    <>
      <div className="hidden sm:block">
        <PopularCuisinesDesktop />
      </div>

      <div className="sm:hidden">
        <PopularCuisinesMobile />
      </div>
    </>
  );
};

export default PopularCuisines;
