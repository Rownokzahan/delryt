"use client";

import FormSubmitButton from "@/forms/components/FormSubmitButton";
import useHandleCouponApply from "@/hooks/useHandleCouponApply";
import useModalById from "@/hooks/useModalById";
import { useLazyCheckCouponCodeQuery } from "@/store/features/checkout/couponApi";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BsExclamationCircle } from "react-icons/bs";

interface Inputs {
  couponCode: string;
}

const CouponCodeForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const [checkCouponCode, { isLoading }] = useLazyCheckCouponCodeQuery();
  const { handleApplyCoupon } = useHandleCouponApply();
  const { closeModal: closeCouponCodeModal } = useModalById("couponCodeModal");
  const { closeModal: closeCouponsModal } = useModalById("couponsModal");

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const coupon = await checkCouponCode(data.couponCode).unwrap();
      if (coupon) {
        handleApplyCoupon(coupon);
        closeCouponsModal();
      }
    } catch (error) {
      console.error("Error applying coupon code:", error);
      toast.error("Invalid coupon code. Please try again.");
    } finally {
      reset();
      closeCouponCodeModal();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-0.5">
        <input
          type="text"
          {...register("couponCode", { required: "Code is required" })}
          placeholder="Type your coupon code here"
          className="w-full py-2 px-4 border rounded-md outline-0"
        />

        {errors?.couponCode && (
          <p className="ms-1 text-xs text-primary/90 flex gap-1 items-center">
            <BsExclamationCircle className="text-[10px]" />
            <span>{errors.couponCode.message}</span>
          </p>
        )}
      </div>

      <FormSubmitButton
        className="mt-6"
        isSubmitting={isLoading}
        label="Apply"
      />
    </form>
  );
};

export default CouponCodeForm;
