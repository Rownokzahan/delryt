import CategoriesCarousel from "./components/CategoriesCarousel";

const Categories = () => {
  return (
    <section className="bg-gray-50">
      <div className="ui-container pt-11 pb-6 sm:pb-8 relative">
        <div className="mb-6 flex items-center justify-between">
          {/* Section Title */}
          <h3 className="text-2xl">
            <span>Most Loved</span>{" "}
            <span className="font-semibold">Categories</span>
          </h3>
        </div>
        <CategoriesCarousel />
      </div>
    </section>
  );
};

export default Categories;
