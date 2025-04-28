"use client";

import { useSelectedTimeDate } from "@/modals/DeliveryTimeSelectionModal/SelectedTimeDateProvider";
import clsx from "clsx";

interface DateCardProps {
  date: Date;
}

const DateCard = ({ date }: DateCardProps) => {
  const { selectedDate, setSelectedDate } = useSelectedTimeDate();

  const weekday = date.toLocaleDateString("en-US", { weekday: "long" });
  const formattedDate = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const isSelected = date.toDateString() === selectedDate.toDateString();

  return (
    <button
      onClick={() => setSelectedDate(date)}
      className={clsx(
        "w-28 min-w-max p-2 sm:p-3 border rounded-md shadow-xs bg-uiWhite text-uiBlack-light",
        "shrink-0 flex flex-col items-center justify-center text-center",
        isSelected ? "border-primary" : "border-uiBlack-light/30"
      )}
    >
      <h5
        className={clsx(
          "mb-1 text-xs sm:text-sm font-semibold",
          isSelected && "text-uiBlack"
        )}
      >
        {weekday}
      </h5>
      <p className="text-[10px] sm:text-xs">{formattedDate}</p>
    </button>
  );
};

export default DateCard;
