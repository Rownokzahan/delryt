import CategoriesCarousel from "./components/CategoriesCarousel";

const Categories = () => {
  return (
    <section className="ui-container pt-12 pb-24 sm:pb-12 relative">
      <div className="mb-6 flex items-center justify-between">
        {/* Section Title */}
        <h3 className="text-2xl">
          <span>Most Loved</span>{" "}
          <span className="font-semibold">Categories</span>
        </h3>
      </div>

      <CategoriesCarousel />
    </section>
  );
};

export default Categories;
