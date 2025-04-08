import clsx from "clsx";
import { useEffect } from "react";
import { HiOutlineBolt } from "react-icons/hi2";
import { IoMdTime } from "react-icons/io";
import { DayInfo, TimeSlots } from "./types";
import getTimeSlotsByStartHour from "./utils/getTimeSlotsByStartHour";
import isSelectedDateToday from "./utils/isSelectedDateToday";

interface TimeSlotSelectionProps {
  selectedDate: DayInfo;
  selectedTime: string;
  setSelectedTime: (time: string) => void;
}

const TimeSlotSelection = ({
  selectedDate,
  selectedTime,
  setSelectedTime,
}: TimeSlotSelectionProps) => {
  // Initialize time slots based on the selected date
  let timeSlots: TimeSlots = getTimeSlotsByStartHour();

  if (isSelectedDateToday(selectedDate)) {
    const currentHour = new Date().getHours();
    timeSlots = getTimeSlotsByStartHour(currentHour + 1);
    timeSlots.unshift("Now"); // Add "Now" as an option for immediate bookings
  }

  // Automatically select the first time slot when the time slots list updates
  useEffect(() => {
    if (timeSlots.length > 0) {
      setSelectedTime(timeSlots[0]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate]);

  if (timeSlots.length === 0) {
    return <p className="text-uiBlack/70 text-center">No slot available</p>;
  }

  return (
    <>
      <h4 className="font-semibold mb-4">Select a Slot Time</h4>

      {/* Render the list of available time slots */}
      <div className="max-h-[30dvh] sm:max-h-[40dvh] pb-4 pe-2 grid gap-3 overflow-y-auto">
        {timeSlots.map((time) => (
          <button
            key={time}
            onClick={() => setSelectedTime(time)} // Update selected time when clicked
            className={clsx(
              "px-3 py-2 border rounded-md w-full text-uiBlack-light",
              selectedTime === time && "border-primary",
              "flex items-center gap-2"
            )}
          >
            <i
              className={clsx(
                "text-lg sm:text-xl shrink-0",
                selectedTime === time && "text-primary"
              )}
            >
              {time === "Now" ? <HiOutlineBolt /> : <IoMdTime />}
            </i>

            <span
              className={clsx(
                "text-sm sm:text-base",
                selectedTime === time && "text-uiBlack font-medium"
              )}
            >
              {time === "Now" ? "Now in 40 to 60 mins" : time}
            </span>
          </button>
        ))}
      </div>
    </>
  );
};

export default TimeSlotSelection;
