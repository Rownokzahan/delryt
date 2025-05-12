import Modal from "../../Modal";
import CouponCodeForm from "./CouponCodeForm";

const CouponCodeModal = () => {
  return (
    <Modal modalId="couponCodeModal" containerClasses="p-4 pt-5 rounded-lg">
      <h3 className="mb-2 text-xl">Have a code?</h3>
      <p className="mb-4 text-sm text-uiBlack-light">
        Did not find the coupon code you were looking for!
      </p>

      <CouponCodeForm />
    </Modal>
  );
};

export default CouponCodeModal;
