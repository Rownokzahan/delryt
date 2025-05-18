import { GiKnifeFork } from "react-icons/gi";

const CategoryProductsNotFound = () => {
  return (
    <div className="py-8">
      <div className="flex flex-col items-center gap-3">
        <GiKnifeFork className="text-4xl" />
        <h2 className="text-lg font-semibold">No Food Found</h2>
      </div>
    </div>
  );
};

export default CategoryProductsNotFound;
