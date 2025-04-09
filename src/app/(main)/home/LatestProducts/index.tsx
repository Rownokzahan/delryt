import ProductsCarousel from "./components/ProductsCarousel";

const LatestProducts = () => {
  return (
    <section className="ui-container pt-12 pb-24 sm:pb-12 relative">
      {/* Section Title */}
      <h3 className="mb-6 md:mb-3 text-2xl capitalize">
        <span>Latests from</span>{" "}
        <span className="font-semibold">This Branch</span>
      </h3>

      <ProductsCarousel />
    </section>
  );
};

export default LatestProducts;
