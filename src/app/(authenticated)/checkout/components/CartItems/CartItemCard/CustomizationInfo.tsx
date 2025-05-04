import { LocalCartItem } from "@/types";
import { GoDotFill } from "react-icons/go";

interface CustomizationInfoProps {
  cartItem: LocalCartItem;
  cartItemIndex: number;
}

const CustomizationInfo = ({ cartItem }: CustomizationInfoProps) => {
  const {
    selectedAddOns,
    product: { add_ons },
  } = cartItem;

  if (selectedAddOns.length === 0) {
    return (
      <p className="text-xs text-uiBlack-light truncate">No customization</p>
    );
  }

  const addOnSummary = selectedAddOns
    .map(({ id, quantity }) => {
      const addOn = add_ons.find((item) => item.id === id);
      return addOn ? `${addOn.name} (${quantity})` : null;
    })
    .filter(Boolean)
    .join(", ");

  return (
    <div className="min-w-0 text-xs text-uiBlack-light flex items-center">
      <button className="text-primary text-sm font-medium">Edit</button>

      <div className="min-w-0 flex items-center">
        <GoDotFill className="ms-1 me-1 text-uiBlack-light" />

        <p className="truncate">{addOnSummary}</p>
      </div>
    </div>
  );
};

export default CustomizationInfo;
