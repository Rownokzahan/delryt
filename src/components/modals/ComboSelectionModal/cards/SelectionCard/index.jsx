import Image from "next/image";
import { IoMdRadioButtonOff } from "react-icons/io";
import { PiRadioButtonFill } from "react-icons/pi";

const SelectionCard = ({
  item,
  selectedItems,
  handleSelectItem,
  currentStep,
}) => {
  const { id, name, description, imageUrl, isVeg } = item || {};

  return (
    <div
      onClick={() => handleSelectItem(item)}
      className="py-4 w-full flex gap-2 cursor-pointer"
      role="button"
    >
      <figure className="w-[72px] flex-shrink-0">
        <Image
          width={150}
          height={100}
          src={imageUrl}
          alt={name}
          className="w-full aspect-[3/2]"
        />
      </figure>

      <div className="flex-1 overflow-hidden inline-block space-y-1">
        <div>
          <div className="mb-2 flex gap-2">
            {/* veg/non-veg indicator */}
            <Image
              width={12}
              height={12}
              src={isVeg ? "images/icons/veg.svg" : "images/icons/non-veg.svg"}
              alt={isVeg ? "Veg" : "Non Veg"}
              className="mt-[2px] size-4 object-contain"
            />
            <h5 className="font-semibold text-sm truncate">{name}</h5>
          </div>
        </div>
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
