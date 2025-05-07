"use client";

import Button from "@/components/ui/Button";
import { useCart } from "@/hooks/useCart";
import useModalById from "@/hooks/useModalById";
import clsx from "clsx";
import { IoChevronDown } from "react-icons/io5";

const FixedBottomBar = () => {
  const { cartTotal } = useCart();
  const { openModal } = useModalById("addAddressModal");

  return (
    <div
      className={clsx("w-full fixed left-0 bottom-0 bg-uiWhite rounded-t-2xl")}
    >
      <div className="ui-container py-3 bg-primary/5 rounded-t-2xl flex items-center justify-between">
        <div>
          <p className="text-lg font-medium">৳{cartTotal} </p>
          <button className="font-medium text-sm flex items-center">
            Bill Summary <IoChevronDown />
          </button>
        </div>

        <Button onClick={openModal}>Place Order</Button>
      </div>
    </div>
  );
};

export default FixedBottomBar;
