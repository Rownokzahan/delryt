import VegNonVegIcon from "@/components/ui/VegNonVegIcon";
import Image from "next/image";
import { IoMdRadioButtonOff } from "react-icons/io";
import { PiRadioButtonFill } from "react-icons/pi";
import { ComboItem, SelectedItems, Step } from "../../types";

interface SelectionCardProps {
  item: ComboItem;
  selectedItems: SelectedItems;
  updateSelectedItems: (item: ComboItem) => void;
  currentStep: Step;
}

const SelectionCard = ({
  item,
  selectedItems,
  updateSelectedItems,
  currentStep,
}: SelectionCardProps) => {
  const { id, name, description, image, isVeg } = item || {};

  return (
    <div
      onClick={() => updateSelectedItems(item)}
      className="py-4 border-t flex gap-2 cursor-pointer"
      role="button"
    >
      <figure className="w-[72px] shrink-0">
        <Image
          width={150}
          height={100}
          src={image}
          alt={name}
          className="w-full aspect-3/2"
        />
      </figure>

      <div className="flex-1 overflow-hidden inline-block space-y-1">
        <h5 className="truncate">
          {/* veg/non-veg indicator */}
          <VegNonVegIcon isVeg={isVeg} className="size-3! mb-px me-1" />
          <span className="font-semibold text-sm">{name}</span>
        </h5>

        <p className="text-xs truncate">{description}</p>
      </div>

      <div className="text-2xl">
        {selectedItems[`item${currentStep}`]?.id === id ? (
          <PiRadioButtonFill className="text-primary" />
        ) : (
          <IoMdRadioButtonOff className="text-gray-300" />
        )}
      </div>
    </div>
  );
};

export default SelectionCard;
