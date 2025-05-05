import useModalById from "@/hooks/useModalById";
import { LocalCartItem } from "@/types";
import { GoDotFill } from "react-icons/go";

interface CustomizationInfoProps {
  cartItem: LocalCartItem;
  cartItemIndex: number;
}

const CustomizationInfo = ({ cartItem }: CustomizationInfoProps) => {
  const { selectedAddOns, product } = cartItem;
  const { openModalWithData } = useModalById("productCustomizationModal");

  if (product.add_ons.length === 0) {
    return (
      <p className="text-xs text-uiBlack-light truncate">No customization</p>
    );
  }

  const addOnSummary = selectedAddOns
    .map(({ id, quantity }) => {
      const addOn = product.add_ons.find((item) => item.id === id);
      return addOn ? `${addOn.name} (${quantity})` : null;
    })
    .filter(Boolean)
    .join(", ");

  const handleEdit = () => {
    openModalWithData({ product, selectedAddOns });
  };

  return (
    <div className="min-w-0 text-xs text-uiBlack-light flex items-center">
      <button onClick={handleEdit} className="text-primary text-sm font-medium">
        Edit
      </button>

      {selectedAddOns.length > 0 && (
        <div className="min-w-0 flex items-center">
          <GoDotFill className="ms-1 me-1 text-uiBlack-light" />

          <p className="truncate">{addOnSummary}</p>
        </div>
      )}
    </div>
  );
};

export default CustomizationInfo;
