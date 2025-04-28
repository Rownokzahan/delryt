"use client";

import Modal from "../Modal";
import useCheckoutStates from "@/hooks/useCheckoutStates";
import useModalById from "@/hooks/useModalById";
import CouponCodeModal from "./CouponCodeModal";
import CouponCard from "./CouponCard";

const CouponsModal = () => {
  const { openModal: openCouponCodeModal } = useModalById("couponCodeModal");
  const {
    coupon: { couponList },
  } = useCheckoutStates();

  return (
    <Modal modalId="couponsModal" containerClasses="rounded-md ">
      <div className="p-3 border-b rounded-t-md shadow-md flex items-center justify-between">
        <h3 className="text-lg font-medium">Coupons for you</h3>

        <button
          onClick={openCouponCodeModal}
          className="py-1 px-3 border rounded-md text-primary font-medium text-sm"
        >
          Have a code
        </button>
      </div>

      <div
        className="p-3 sm:px-8 sm:py-4 bg-gray-100  max-h-[70dvh] overflow-y-auto"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#c60e0e transparent",
        }}
      >
        <div className="mb-4 flex items-center justify-center">
          <div className="w-28 h-[2px] bg-linear-to-l from-gray-300 relative">
            <span className="size-[6px] rounded-full bg-gray-300 absolute -right-px top-1/2 -translate-y-1/2" />
          </div>

          <p className="w-max px-4 text-xs text-uiBlack-light text-center font-medium">
            AVAILABLE COUPONS
          </p>

          <div className="w-28 h-[2px] bg-linear-to-r from-gray-300 relative">
            <span className="size-[6px] rounded-full bg-gray-300 absolute -left-px top-1/2 -translate-y-1/2" />
          </div>
        </div>

        <div className="space-y-4">
          {couponList.map((coupon) => (
            <CouponCard key={coupon.id} coupon={coupon} />
          ))}
        </div>
      </div>

      <CouponCodeModal />
    </Modal>
  );
};

export default CouponsModal;
