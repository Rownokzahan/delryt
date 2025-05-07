"use client";

import Button from "@/components/ui/Button";
import useCheckoutStates from "@/hooks/useCheckoutStates";
import useModalById from "@/hooks/useModalById";
import clsx from "clsx";
import { FormEvent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface Input {
  tipAmount: number;
}

/** Ensures only numeric values and restricts input to a maximum of 6 digits */
const handleNumericInput = (e: FormEvent<HTMLInputElement>) => {
  const target = e.currentTarget;
  target.value = target.value.replace(/[^0-9]/g, "").slice(0, 6);
};

const CustomTipForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Input>({ mode: "onChange" });
  const { deliveryTip, updateDeliveryTipAmount } = useCheckoutStates();
  const { closeModal: closeCustomTipModal } = useModalById("customTipModal");

  const handleTipSelection = (amount: number) => {
    updateDeliveryTipAmount(amount);
    closeCustomTipModal();
  };

  const onSubmit: SubmitHandler<Input> = (data) => {
    const amount = Number(data.tipAmount);

    if (isNaN(amount) || amount < 0) {
      console.warn("Invalid tip amount");
      return;
    }

    handleTipSelection(amount);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Tip Amount Input */}
      <div className="space-y-1">
        <input
          id="tipAmount"
          type="number"
          inputMode="numeric"
          autoComplete="off"
          placeholder="Add your tip amount here"
          onInput={handleNumericInput}
          {...register("tipAmount", {
            required: true,
            min: {
              value: 5,
              message: "Tip amount is too low! Minimum ৳5!",
            },
            max: {
              value: 3000,
              message: "Thanks for being generous! Maximum tip is ৳3000!",
            },
          })}
          className={clsx(
            "w-full px-4 py-3 rounded-sm border outline-0 hide-input-number-arrows",
            "focus:border-primary focus:shadow-xs",
            "font-medium text-uiBlack",
            "placeholder-slate-400/60 placeholder:font-normal"
          )}
        />

        {errors && errors.tipAmount && (
          <p className="text-primary-dark text-xs">
            {errors.tipAmount.message}
          </p>
        )}
      </div>

      {/* Suggested Tip Buttons */}
      <div className="flex items-center gap-4">
        {deliveryTip.suggestedOptions.map((item, index) => (
          <button
            key={index}
            onClick={() => handleTipSelection(item.amount)}
            type="button"
            className="py-2 px-6 border rounded-md text-sm"
          >
            {item.text}
          </button>
        ))}
      </div>

      {/* Submit Button */}
      <Button type="submit" className="w-full" disabled={!isValid}>
        Confirm
      </Button>
    </form>
  );
};

export default CustomTipForm;
