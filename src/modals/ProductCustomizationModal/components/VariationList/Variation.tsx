import { ProductVariation } from "@/types";
import VariationItem from "./VariationItem";

interface VariationProps {
  variation: ProductVariation;
}

const Variation = ({ variation }: VariationProps) => {
  const { name, values,required } = variation;

  return (
    <div className="space-y-3">
      <div className="px-4 py-2 bg-linear-to-r from-gray-100 via-uiWhite flex justify-between items-center gap-4">
        <div>
          <p className="font-medium text-sm">{name}</p>
          <p className="text-xs text-uiBlack-light">Select one option</p>
        </div>

        {required === "on" && <p className="text-xs text-uiBlack-light"></p>}
      </div>

      <ul className="px-4 space-y-3">
        {values.map((variationItem, idx) => (
          <VariationItem key={idx} variationItem={variationItem} />
        ))}
      </ul>
    </div>
  );
};

export default Variation;
