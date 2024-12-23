import clsx from "clsx";
import { FC, useEffect } from "react";
import { HiOutlineBolt } from "react-icons/hi2";
import { IoMdTime } from "react-icons/io";
import { DayInfo, TimeSlots } from "./types";
import getTimeSlotsByStartHour from "./utils/getTimeSlotsByStartHour";
import isSelectedDateToday from "./utils/isSelectedDateToday";

type TimeSlotSelectionProps = {
  selectedDate: DayInfo;
  selectedTime: string;
  setSelectedTime: (time: string) => void;
};

const TimeSlotSelection: FC<TimeSlotSelectionProps> = ({
  selectedDate,
  selectedTime,
  setSelectedTime,
}) => {
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
  }, [selectedDate]);

  if (timeSlots.length === 0) {
    return (
      <p className="px-3 pt-4 text-ui-gray text-center">No slot available</p>
    );
  }

  return (
    <>
      <h4 className="mt-4 font-bold mb-4">Select a Slot Time</h4>

      {/* Render the list of available time slots */}
      <div className="max-h-[40vh] pe-2 grid gap-3 overflow-y-auto">
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
                "text-xl flex-shrink-0",
                selectedTime === time && "text-primary"
              )}
            >
              {time === "Now" ? <HiOutlineBolt /> : <IoMdTime />}
            </i>

            <span className={clsx(selectedTime === time && "text-primary font-medium")}>
              {time === "Now" ? "Now in 40 to 60 mins" : time}
            </span>
          </button>
        ))}
      </div>
    </>
  );
};

export default TimeSlotSelection;
