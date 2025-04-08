import { TimeSlots } from "../types";

const START_HOUR: number = 10;
const END_HOUR: number = 22;
const DURATION_MINUTES: number = 60;

const formatTime = (hour: number, minute: number = 0): string => {
  const period = hour >= 12 ? "PM" : "AM";
  let adjustedHour = hour % 12;
  adjustedHour = adjustedHour === 0 ? 12 : adjustedHour; // Handle 12 AM/PM
  const formattedMinute = minute < 10 ? "0" + minute : minute;
  return `${adjustedHour}:${formattedMinute} ${period}`;
};

// Function get time slots accroding to starting hour
const getTimeSlotsByStartHour = (startHour: number = START_HOUR): TimeSlots => {
  const endHour: number = END_HOUR;
  const durationInMinutes: number = DURATION_MINUTES;

  const slots: TimeSlots = [];

  if (startHour > endHour) {
    return slots; // empty array
  }

  let currentHour: number = startHour;
  let currentMinute: number = 0;

  while (currentHour < endHour) {
    const startTime = formatTime(currentHour, currentMinute);

    // Calculate end time by adding the duration
    const endMinute = (currentMinute + durationInMinutes) % 60;
    const endHour =
      currentHour + Math.floor((currentMinute + durationInMinutes) / 60);
    const endTime = formatTime(endHour, endMinute);

    slots.push(`${startTime} - ${endTime}`);

    // Increment the current time by the duration
    currentMinute += durationInMinutes;
    if (currentMinute >= 60) {
      currentMinute -= 60;
      currentHour += 1;
    }
  }

  return slots;
};

export default getTimeSlotsByStartHour;
