import { DayInfo } from "../types";

// Function to get day info in a formatted structure
const getDayInfo = (date: Date = new Date()): DayInfo => {
  const weekday = date.toLocaleDateString("en-US", { weekday: "long" });

  const formattedDate = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  // Return structured day info
  return { weekday, date: formattedDate, fullDate: date };
};

// Function to get the next 15 days of day info
const getNext15Days = (startDate: Date = new Date()): DayInfo[] => {
  const daysInfo: DayInfo[] = [];

  // Loop to generate day info for today and the next 14 days
  for (let i = 0; i < 15; i++) {
    const currentDay = new Date(startDate);
    currentDay.setDate(startDate.getDate() + i); // Increment day by i
    daysInfo.push(getDayInfo(currentDay)); // Push day info into array
  }

  return daysInfo; // Return array of DayInfo for the next 15 days
};

export default getNext15Days;
