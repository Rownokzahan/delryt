import CuisinesCarousel from "./components/CuisinesCarousel";

const Cuisines = () => {
  return (
    <section className="bg-primary">
      <div className="ui-container py-12">
        <h3 className="mb-4 md:mb-10 text-uiWhite text-2xl md:text-3xl font-semibold text-center md:text-left">
          Popular Cuisines
        </h3>

        {/* Carousel */}
        <CuisinesCarousel />
      </div>
    </section>
  );
};

export default Cuisines;
