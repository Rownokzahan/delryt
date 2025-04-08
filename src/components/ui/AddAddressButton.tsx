"use client";

import useModalById from "@/hooks/useModalById";
import { BsPlusCircleFill } from "react-icons/bs";

const AddAddressButton = () => {
  const { openModal } = useModalById("addAddressModal");

  return (
    <button
      onClick={openModal}
      className="w-full h-20 lg:h-28 p-4 border-2 border-dashed border-primary rounded-lg bg-primary/5 grid place-items-center"
    >
      <p className="flex items-center gap-2">
        <BsPlusCircleFill className="text-primary text-xl" />{" "}
        <span className="text-uiBlack-light">Add New Address</span>
      </p>
    </button>
  );
};

export default AddAddressButton;
