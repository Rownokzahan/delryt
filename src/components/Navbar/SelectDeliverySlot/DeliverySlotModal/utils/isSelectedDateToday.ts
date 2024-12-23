import { DayInfo } from "../types";

const isSelectedDateToday = (date: DayInfo) => {
  const selectedDateString = new Date(date.fullDate).toDateString();
  const todayString = new Date().toDateString();
  return selectedDateString === todayString;
};

export default isSelectedDateToday;
