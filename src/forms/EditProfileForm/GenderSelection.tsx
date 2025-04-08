import clsx from "clsx";
import {
  PiGenderFemaleBold,
  PiGenderMaleBold,
  PiGenderNonbinaryBold,
} from "react-icons/pi";

const genderOptions = [
  {
    value: "male",
    label: "Male",
    Icon: PiGenderMaleBold,
    rotate: "rotate-180",
  },
  {
    value: "female",
    label: "Female",
    Icon: PiGenderFemaleBold,
    rotate: "rotate-45",
  },
  {
    value: "prefer not to say",
    label: "Prefer Not to Say",
    Icon: PiGenderNonbinaryBold,
    rotate: "rotate-[225deg]",
  },
];

interface GenderSelectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
}

const GenderSelection = ({ register }: GenderSelectionProps) => {
  return (
    <div className="space-y-3">
      <p className="text-sm text-uiBlack-light">Gender ?</p>
      <div className="flex items-center gap-8">
        {genderOptions.map(({ value, label, Icon, rotate }) => (
          <label
            key={value}
            className="flex flex-col items-center space-y-1 cursor-pointer"
          >
            <input
              type="radio"
              value={value}
              {...register("gender")}
              className="hidden peer"
            />
            <div
              className={clsx(
                "size-12 rounded-full grid place-items-center",
                "bg-gray-200 peer-checked:bg-primary",
                "text-primary peer-checked:text-uiWhite"
              )}
            >
              <Icon className={clsx("text-3xl", rotate)} />
            </div>
            <p className="text-center text-sm text-uiBlack-light">{label}</p>
          </label>
        ))}
      </div>
    </div>
  );
};

export default GenderSelection;
