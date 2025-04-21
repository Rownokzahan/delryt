import { ProductVariation } from "@/types";
import Variation from "./Variation";

interface VariationListProps {
  variations: ProductVariation[];
}

const VariationList = ({ variations }: VariationListProps) => {
  if (variations.length === 0) {
    return null;
  }

  return (
    <div className="space-y-3">
      {variations.map((variation, idx) => (
        <Variation key={idx} variation={variation} />
      ))}
    </div>
  );
};

export default VariationList;
