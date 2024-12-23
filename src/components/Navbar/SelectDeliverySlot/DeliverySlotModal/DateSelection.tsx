import clsx from "clsx";
import { FC, useEffect } from "react";
import { DayInfo } from "./types";
import getNext15Days from "./utils/getNext15Days";

type DateSelectionProps = {
  selectedDate: DayInfo | null;
  setSelectedDate: (date: DayInfo) => void;
};

const DateSelection: FC<DateSelectionProps> = ({
  selectedDate,
  setSelectedDate,
}) => {
  // Generate the next 15 days for the date picker
  const days: DayInfo[] = getNext15Days();

  useEffect(() => {
    // Select the first day as the default
    if (selectedDate === null) {
      setSelectedDate(days[0]);
    }
  }, []);

  return (
    <div className="pb-4 pt-2 flex gap-3 overflow-x-auto">
      {days?.map((day: DayInfo) => (
        <button
          key={day?.date}
          onClick={() => setSelectedDate(day)} // Update the selected date
          className={clsx(
            "px-3 py-3 border rounded-md w-28 min-w-max",
            selectedDate?.date === day?.date && "border-primary",
            "flex-shrink-0 flex flex-col items-center justify-center text-center"
          )}
        >
          <h5
            className={clsx(
              "mb-1 text-sm font-medium",
              selectedDate?.date === day?.date && "text-primary/80"
            )}
          >
            {day?.weekday}
          </h5>
          <p className="text-uiBlack-light text-xs">{day?.date}</p>
        </button>
      ))}
    </div>
  );
};

export default DateSelection;
