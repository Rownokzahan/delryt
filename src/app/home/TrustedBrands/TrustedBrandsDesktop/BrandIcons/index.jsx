import BrandIconCard from "./BrandIconCard";

const BrandIcons = ({ brands }) => {
  return (
    <div
      className="flex flex-shrink-0 overflow-x-auto gap-4 pb-1"
      style={{
        scrollbarWidth: "thin",
        scrollbarColor: "rgba(192, 192, 201,0.4) transparent",
      }}
    >
      {brands.map((brand) => (
        <BrandIconCard key={brand?.id} brand={brand} />
      ))}
    </div>
  );
};

export default BrandIcons;
