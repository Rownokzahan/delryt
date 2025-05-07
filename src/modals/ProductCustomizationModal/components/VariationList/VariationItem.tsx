import { ProductVariationItem } from "@/types";
import { RiCheckboxBlankLine, RiCheckboxFill } from "react-icons/ri";

interface VariationItemProps {
  variationItem: ProductVariationItem;
}

const VariationItem = ({ variationItem }: VariationItemProps) => {
  const { label, optionPrice } = variationItem;

  const isItemSelected = false;

  const handleOnClick = () => {};

  return (
    <li
      onClick={handleOnClick}
      className="flex items-center justify-between cursor-pointer"
    >
      <div className="flex items-center gap-2">
        {isItemSelected ? (
          <RiCheckboxFill className="text-xl text-success" />
        ) : (
          <RiCheckboxBlankLine className="text-xl" />
        )}

        <p className="text-sm text-uiBlack-light">{label}</p>
      </div>

      <p className="text-xs text-uiBlack-light">৳ {optionPrice}</p>
    </li>
  );
};

export default VariationItem;
