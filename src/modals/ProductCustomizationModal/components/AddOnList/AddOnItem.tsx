import { ProductAddOnItem } from "@/types";
import { RiCheckboxBlankLine, RiCheckboxFill } from "react-icons/ri";

interface AddOnItemProps {
  addOnItem: ProductAddOnItem;
}

const AddOnItem = ({ addOnItem }: AddOnItemProps) => {
  const { name, price } = addOnItem;
  const isSelected = false;

  const handleOnClick = () => {};

  return (
    <li
      onClick={() => handleOnClick}
      className="flex items-center justify-between cursor-pointer"
    >
      <div className="flex items-center gap-2">
        {isSelected ? (
          <RiCheckboxFill className="text-xl text-success" />
        ) : (
          <RiCheckboxBlankLine className="text-xl" />
        )}

        <p className="text-sm text-uiBlack-light">{name}</p>
      </div>

      <p className="text-xs text-uiBlack-light">₹ {price}</p>
    </li>
  );
};

export default AddOnItem;
