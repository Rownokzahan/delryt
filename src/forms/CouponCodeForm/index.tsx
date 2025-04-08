"use client";

import Button from "@/components/ui/Button";
import useModalById from "@/hooks/useModalById";
import { SubmitHandler, useForm } from "react-hook-form";

interface Inputs {
  couponCode: string;
}

const CouponCodeForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<Inputs>();

  const { closeModal } = useModalById("couponCodeModal");

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input
        type="text"
        {...register("couponCode", { required: true })}
        placeholder="Type your coupon code here"
        className="w-full py-2 px-4 border rounded-md outline-0"
      />

      <Button type="submit" disabled={!isValid} className="w-full">
        Apply
      </Button>
    </form>
  );
};

export default CouponCodeForm;
