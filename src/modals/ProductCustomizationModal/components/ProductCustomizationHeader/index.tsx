import VegNonVegIcon from "@/components/ui/VegNonVegIcon";
import { useProductCustomization } from "../../ProductCustomizationProvider";

const ProductCustomizationHeader = () => {
  const {
    product: { product_type, name },
    resetCustomization,
  } = useProductCustomization();

  const isVeg = product_type === "veg";

  return (
    <div className="p-4 border-b flex justify-between items-center gap-6">
      <h4 className="truncate">
        <VegNonVegIcon isVeg={isVeg} className="me-1 mb-1" />
        <span className="font-medium">{name}</span>
      </h4>

      <button
        onClick={resetCustomization}
        className="py-1 font-medium text-primary text-sm text-nowrap"
      >
        Reset Customization
      </button>
    </div>
  );
};

export default ProductCustomizationHeader;
