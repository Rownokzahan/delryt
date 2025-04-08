import clsx from "clsx";
import { useEffect } from "react";
import { DayInfo } from "./types";
import getNext15Days from "./utils/getNext15Days";

interface DateSelectionProps {
  selectedDate: DayInfo | null;
  setSelectedDate: (date: DayInfo) => void;
}

const DateSelection = ({
  selectedDate,
  setSelectedDate,
}: DateSelectionProps) => {
  // Generate the next 15 days for the date picker
  const days: DayInfo[] = getNext15Days();

  useEffect(() => {
    // Select the first day as the default
    if (selectedDate === null) {
      setSelectedDate(days[0]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="py-2 sm:pb-4 sm:pt-2 flex gap-3 overflow-x-auto">
      {days?.map((day: DayInfo) => (
        <button
          key={day?.date}
          onClick={() => setSelectedDate(day)} // Update the selected date
          className={clsx(
            "w-28 min-w-max p-2 sm:p-3 border rounded-md shadow-xs bg-uiWhite text-uiBlack-light",
            "shrink-0 flex flex-col items-center justify-center text-center",
            selectedDate?.date === day?.date
              ? "border-primary"
              : "border-uiBlack-light/30"
          )}
        >
          <h5
            className={clsx(
              "mb-1 text-xs sm:text-sm font-semibold",
              selectedDate?.date === day?.date && "text-uiBlack"
            )}
          >
            {day?.weekday}
          </h5>
          <p className="text-[10px] sm:text-xs">{day?.date}</p>
        </button>
      ))}
    </div>
  );
};

export default DateSelection;
