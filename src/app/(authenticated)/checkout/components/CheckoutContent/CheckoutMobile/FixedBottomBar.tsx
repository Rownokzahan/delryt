"use client";

import Button from "@/components/ui/Button";
import useModalById from "@/hooks/useModalById";
import clsx from "clsx";

const FixedBottomBar = () => {
  const { openModal } = useModalById("addAddressModal");

  return (
    <div
      className={clsx(
        "w-full ui-container py-3 rounded-t-xl",
        "bg-primary/20 flex items-center justify-between",
        "fixed bottom-0"
      )}
    >
      <div className="flex items-center gap-1">
        <p className="text-xl text-primary font-medium">₹375 </p>{" "}
        <p className="text-uiBlack-light text-sm line-through">₹464</p>
      </div>

      <Button onClick={openModal} size="small">
        Add Address
      </Button>
    </div>
  );
};

export default FixedBottomBar;
