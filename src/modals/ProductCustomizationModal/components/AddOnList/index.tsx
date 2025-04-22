import AddOnItem from "./AddOnItem";
import { useProductCustomization } from "../../ProductCustomizationProvider";

const AddOnList = () => {
  const {
    product: { add_ons: addOns },
  } = useProductCustomization();

  if (addOns.length === 0) {
    return null;
  }

  return (
    <div className="space-y-3">
      <div className="px-4 py-2 bg-linear-to-r from-gray-100 via-uiWhite">
        <p className="font-medium text-sm">Addons</p>
        <p className="text-xs text-uiBlack-light">
          Select one or multiple options
        </p>
      </div>

      <ul className="px-4 space-y-3">
        {addOns.map((addOnItem) => (
          <AddOnItem key={addOnItem.id} addOnItem={addOnItem} />
        ))}
      </ul>
    </div>
  );
};

export default AddOnList;
