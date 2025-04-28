import { useSelectedTimeDate } from "@/modals/DeliveryTimeSelectionModal/SelectedTimeDateProvider";
import clsx from "clsx";
import { HiOutlineBolt } from "react-icons/hi2";
import { IoMdTime } from "react-icons/io";

interface TimeCardProps {
  time: string;
}

const TimeCard = ({ time }: TimeCardProps) => {
  const { selectedTime, setSelectedTime } = useSelectedTimeDate();

  const isSelected = selectedTime === time;
  const isNow = time === "now";

  return (
    <button
      onClick={() => setSelectedTime(time)}
      className={clsx(
        "px-3 py-2 border rounded-md w-full text-uiBlack-light",
        isSelected && "border-primary",
        "flex items-center gap-2"
      )}
    >
      <i
        className={clsx(
          "text-lg sm:text-xl shrink-0",
          isSelected && "text-primary"
        )}
      >
        {isNow ? <HiOutlineBolt /> : <IoMdTime />}
      </i>

      <span
        className={clsx(
          "text-sm sm:text-base",
          isSelected && "text-uiBlack font-medium"
        )}
      >
        {isNow ? "Now in 40 to 60 mins" : time}
      </span>
    </button>
  );
};

export default TimeCard;
