// Generate the next 15 days with their weekday and formatted date
export const getNext15Days = () => {
  const daysArray = [];
  const today = new Date();

  for (let i = 0; i <= 15; i++) {
    const currentDate = new Date(today);
    currentDate.setDate(today.getDate() + i);

    const weekday = currentDate.toLocaleDateString("en-US", {
      weekday: "long",
    });
    const date = currentDate.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    daysArray.push({ weekday, date, fullDate: currentDate });
  }

  return daysArray;
};

// Helper function to parse a time slot's start time in AM/PM format to a Date object
export const parseTime = (time) => {
  const trimmedTime = time.trim();
  const [timePart, period] = trimmedTime.split(" "); // Split time from AM/PM

  if (!timePart || !period) {
    throw new Error("Invalid time format");
  }

  const [hours, minutes] = timePart.split(":");

  if (hours === undefined || minutes === undefined) {
    throw new Error("Invalid time format");
  }

  let adjustedHours = parseInt(hours);

  // Convert to 24-hour format
  if (period.toLowerCase() === "pm" && adjustedHours !== 12) {
    adjustedHours += 12; // PM times except 12 PM need to be adjusted
  }
  if (period.toLowerCase() === "am" && adjustedHours === 12) {
    adjustedHours = 0; // 12 AM is actually 00:00 in 24-hour time
  }

  return { hours: adjustedHours, minutes: parseInt(minutes) };
};

// Filter time slots based on the current time if the selected date is today
export const getAvailableTimeSlots = (date, timeSlots) => {
  const currentTime = new Date();
  const currentHours = currentTime.getHours();
  const currentMinutes = currentTime.getMinutes();

  // Check if the selected date is today
  if (date && date?.toDateString() === currentTime.toDateString()) {
    // Filter the available time slots based on the current time
    const availableSlots = timeSlots.filter((slot) => {
      const startTime = slot.split("-")[0].trim(); // Get the start time of the slot and remove extra spaces
      const { hours: slotHours, minutes: slotMinutes } = parseTime(startTime);

      // Check if the slot is in the future compared to the current time
      return (
        slotHours > currentHours ||
        (slotHours === currentHours && slotMinutes > currentMinutes)
      );
    });

    availableSlots.unshift("Now");

    return availableSlots;
  }

  // If the selected date is not today, show all available slots
  return timeSlots;
};
