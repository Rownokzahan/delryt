import { ProductType } from "@/types";
import clsx from "clsx";

const productTypeOptions: { value: ProductType; label: string }[] = [
  { value: "all", label: "All" },
  { value: "veg", label: "Veg" },
  { value: "non_veg", label: "Non Veg" },
];

interface ProductTypeFilterProps {
  selectedProductType: ProductType;
  setSelectedProductType: (productType: ProductType) => void;
}

const ProductTypeFilter = ({
  selectedProductType,
  setSelectedProductType,
}: ProductTypeFilterProps) => {
  return (
    <div className="p-1 size-max rounded-md bg-uiWhite flex items-center">
      {productTypeOptions.map((tab) => (
        <button
          key={tab.value}
          onClick={() => setSelectedProductType(tab.value)}
          className={clsx(
            "px-3 py-1 rounded-md",
            selectedProductType === tab.value && "bg-primary text-uiWhite"
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default ProductTypeFilter;
