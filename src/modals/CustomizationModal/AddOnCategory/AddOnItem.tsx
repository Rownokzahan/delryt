import { AddOnItemType } from "../addOnsData";
import { Id } from "@/types";
import { RiCheckboxBlankLine, RiCheckboxFill } from "react-icons/ri";

interface AddOnItemProps {
  addOnItem: AddOnItemType;
  categoryId: Id;
  selectedAddOns: {
    [key: Id]: AddOnItemType[];
  };
  updateSelectedAddOns: (categoryId: Id, addOnItem: AddOnItemType) => void;
}

const AddOnItem = ({
  addOnItem,
  categoryId,
  selectedAddOns,
  updateSelectedAddOns,
}: AddOnItemProps) => {
  const { id: addOnItemId, name, price } = addOnItem || {};

  const isItemSelected = selectedAddOns[categoryId]?.some(
    (item) => item.id == addOnItemId
  );

  return (
    <li
      onClick={() => updateSelectedAddOns(categoryId, addOnItem)}
      className="flex items-center justify-between cursor-pointer"
    >
      <div className="flex items-center gap-2">
        {isItemSelected ? (
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
