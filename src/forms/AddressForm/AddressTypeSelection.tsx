import { TiHome } from "react-icons/ti";
import { GoBriefcase } from "react-icons/go";
import { FiMapPin } from "react-icons/fi";
import clsx from "clsx";

const addressTypes = [
  { label: "Home", Icon: TiHome },
  { label: "Work", Icon: GoBriefcase },
  { label: "Others", Icon: FiMapPin },
];

interface AddressTypeSelectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
}

const AddressTypeSelection = ({ register }: AddressTypeSelectionProps) => {
  return (
    <div className="py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm">
      <p className="text-xs">Save As</p>

      <div className="flex gap-4">
        {addressTypes.map(({ label, Icon }) => (
          <label key={label} className="cursor-pointer group">
            <input
              type="radio"
              value={label}
              {...register("address_type", {
                required: true,
              })}
              className="hidden"
            />
            <div
              className={clsx(
                "w-20 sm:w-24 py-2 border rounded-md text-uiBlack-light flex justify-center items-center gap-1 sm:gap-2",
                "group-has-[input:checked]:border-primary"
              )}
            >
              <Icon className="shrink-0 group-has-[input:checked]:text-primary" />
              <span className="group-has-[input:checked]:text-black group-has-[input:checked]:font-medium">
                {label}
              </span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default AddressTypeSelection;
