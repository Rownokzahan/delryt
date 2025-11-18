"use client"

import useModalById from "@/hooks/useModalById";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const FilterByDate = () => {
  const { openModal } = useModalById("dateSortModal");

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <p className="text-xs sm:text-base font-medium whitespace-nowrap">Filter by</p>
      <button
        onClick={openModal}
        className="px-2 py-1.5 border rounded-md flex justify-center items-center gap-1 text-primary"
      >
        <span className="text-xs sm:text-sm">Date</span>
        <MdOutlineKeyboardArrowDown />
      </button>
    </div>
  );
};

export default FilterByDate;