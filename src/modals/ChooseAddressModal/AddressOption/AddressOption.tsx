import { Address } from "@/types";
import clsx from "clsx";
import {
  MdOutlineRadioButtonUnchecked,
  MdOutlineRadioButtonChecked,
} from "react-icons/md";

interface AddressOptionProps {
  addressItem: Address;
  isSelected: boolean;
  onSelect: () => void;
}

const AddressOption = ({
  addressItem,
  isSelected,
  onSelect,
}: AddressOptionProps) => {
  const { address, address_type, contact_person_name, contact_person_number } =
    addressItem;

  return (
    <div
      onClick={onSelect}
      className={clsx(
        "py-3 px-3 rounded-md border",
        "flex items-start gap-2 cursor-pointer",
        isSelected ? "border-primary/20 bg-primary/5" : "border-uiBlack-light/10"
      )}
    >
      <div className="shrink-0 text-xl">
        {isSelected ? (
          <MdOutlineRadioButtonChecked className="text-primary" />
        ) : (
          <MdOutlineRadioButtonUnchecked className="text-uiBlack-light/30" />
        )}
      </div>

      <div className="text-sm">
        <p className="text-xs">{address_type}</p>
        <p>{address}</p>
        <p>{contact_person_name}</p>
        <p>{contact_person_number}</p>
      </div>
    </div>
  );
};

export default AddressOption;
