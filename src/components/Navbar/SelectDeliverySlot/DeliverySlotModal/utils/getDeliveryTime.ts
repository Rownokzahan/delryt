import { DayInfo } from "../types";
import isSelectedDateToday from "./isSelectedDateToday";

// Function to get the formatted date
const getFormattedDate = (date: Date): string => {
  return date.toLocaleDateString("en-us", { day: "numeric", month: "short" });
};

// Function to get the delivery time
const getDeliveryTime = (date: DayInfo | null, time: string): string => {
  if (date === null) return "Now"; // Early return if date is null

  if (time === "Now") return "Now";

  if (isSelectedDateToday(date)) {
    return `By ${time}`;
  }

  return `By ${getFormattedDate(date.fullDate)}, ${time}`;
};

export default getDeliveryTime;
