"use client";

import useModalById from "@/hooks/useModalById";
import { RiSearchLine } from "react-icons/ri";

const SearchBarMobile = () => {
  const { openModal } = useModalById("searchModal");

  return (
    <button onClick={openModal} className="w-full p-2 pt-0 sm:hidden">
      <div className="w-full py-1 px-2 ps-3 border rounded-lg shadow-sm flex items-center gap-1">
        <RiSearchLine className="text-xl text-primary" />
        <input
          type="text"
          placeholder="Search for restaurants, cuisines and more..."
          className="w-full p-2 outline-hidden text-sm font-bold placeholder:text-uiBlack/70 placeholder:font-normal"
        />
      </div>
    </button>
  );
};

export default SearchBarMobile;
