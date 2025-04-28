"use client";

import { useEffect } from "react";
import getTimeSlotsByStartHour from "./getTimeSlotsByStartHour";
import TimeCard from "./TimeCard";
import { useSelectedTimeDate } from "../../SelectedTimeDateProvider";

const TimeSelection = () => {
  const { selectedDate, setSelectedTime } = useSelectedTimeDate();

  let timeSlots = getTimeSlotsByStartHour();

  const today = new Date();

  if (today.toDateString() === selectedDate.toDateString()) {
    const currentHour = today.getHours();
    timeSlots = getTimeSlotsByStartHour(currentHour + 1);
    timeSlots.unshift("now");
  }

  // Automatically select the first time slot when the time slots list updates
  useEffect(() => {
    if (timeSlots.length > 0) {
      setSelectedTime(timeSlots[0]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate]);

  return (
    <div className="px-4 pb-4">
      <h4 className="font-semibold mb-4">Select a Slot Time</h4>

      <div
        className="max-h-[30dvh] sm:h-[40dvh] pe-2 grid gap-3 overflow-y-auto"
        style={{
          scrollbarColor: "#7a737366 transparent",
        }}
      >
        {timeSlots.length === 0 ? (
          <p className="text-uiBlack/70 text-center">No slot available</p>
        ) : (
          timeSlots.map((time, idx) => <TimeCard key={idx} time={time} />)
        )}
      </div>
    </div>
  );
};

export default TimeSelection;
