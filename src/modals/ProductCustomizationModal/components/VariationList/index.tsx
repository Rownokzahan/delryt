import Variation from "./Variation";
import { useProductCustomization } from "../../ProductCustomizationProvider";

const VariationList = () => {
  const {
    product: { variations },
  } = useProductCustomization();

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
