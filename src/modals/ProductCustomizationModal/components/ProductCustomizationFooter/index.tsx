import { useProductCustomization } from "../../ProductCustomizationProvider";

const ProductCustomizationFooter = () => {
  const { totalPrice } = useProductCustomization();

  return (
    <div className="sticky bottom-0">
      <button
        onClick={() => {}}
        className="w-full p-4 bg-primary font-medium text-white flex items-center justify-between"
      >
        <p>৳ {totalPrice}</p>
        <p>Add Item</p>
      </button>
    </div>
  );
};

export default ProductCustomizationFooter;
