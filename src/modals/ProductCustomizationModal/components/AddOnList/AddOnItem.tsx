import { ProductAddOnItem, SelectedAddOnItem } from "@/types";
import { RiCheckboxBlankLine, RiCheckboxFill } from "react-icons/ri";
import { useProductCustomization } from "../../ProductCustomizationProvider";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";

interface AddOnItemProps {
  addOnItem: ProductAddOnItem;
}

const AddOnItem = ({ addOnItem }: AddOnItemProps) => {
  const { selectedAddOns, setSelectedAddOns } = useProductCustomization();
  const { id, name, price } = addOnItem;
  const alreadySelected = selectedAddOns.find((item) => item.id === id);

  const toggleAddOn = () => {
    setSelectedAddOns((prev) => {
      const alreadySelected = prev.some((item) => item.id === id);

      if (!alreadySelected) {
        const newAddOnItem: SelectedAddOnItem = {
          id: id,
          quantity: 1,
        };

        return [...prev, newAddOnItem];
      }

      return prev.filter((item) => item.id !== id);
    });
  };

  const incrementQuantity = () => {
    setSelectedAddOns((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = () => {
    setSelectedAddOns((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <li className="h-6 flex items-center">
      <button
        onClick={() => toggleAddOn()}
        className="w-full flex items-center justify-between"
      >
        <span className="flex items-center gap-2">
          {alreadySelected ? (
            <RiCheckboxFill className="text-xl text-success" />
          ) : (
            <RiCheckboxBlankLine className="text-xl" />
          )}
          <span className="text-sm text-uiBlack-light">{name}</span>
        </span>

        <span className="text-xs text-uiBlack-light">৳ {price}</span>
      </button>

      {alreadySelected && (
        <div className="w-15 h-full ms-3 px-px rounded-sm bg-primary/5 flex items-center">
          <button
            onClick={decrementQuantity}
            className="h-full flex-1 place-items-center text-xs text-primary"
          >
            {alreadySelected.quantity === 1 ? <MdDeleteOutline /> : <FaMinus />}
          </button>
          <span className="p-1 text-xs">{alreadySelected.quantity}</span>
          <button
            onClick={incrementQuantity}
            className="h-full flex-1 place-items-center text-xs text-primary"
          >
            <FaPlus />
          </button>
        </div>
      )}
    </li>
  );
};

export default AddOnItem;
