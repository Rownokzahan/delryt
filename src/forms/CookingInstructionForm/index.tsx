"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiEdit3 } from "react-icons/fi";

type FormData = {
  instruction: string;
};

const CookingInstructionForm = () => {
  const [isOnFocus, setIsOnFocus] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, reset, watch } = useForm<FormData>();

  const instructionValue = watch("instruction", ""); // Watch the input field value

  const onSubmit = (data: FormData) => {
    console.log("Submitted Instruction:", data.instruction);
    setIsSubmitted(true);
  };

  const handleRemove = () => {
    console.log("Instruction removed");
    reset();
    setIsSubmitted(false);
  };

  return (
    <form
      onSubmit={handleSubmit(isSubmitted ? handleRemove : onSubmit)}
      className="p-3 rounded-lg bg-uiWhite flex items-center text-sm sm:text-base"
    >
      <FiEdit3 className="shrink-0 text-lg" />

      <input
        type="text"
        {...register("instruction")}
        onFocus={() => setIsOnFocus(true)}
        onBlur={() => setIsOnFocus(false)}
        placeholder={
          isOnFocus
            ? "Type instructions you wish to add"
            : "Write cooking instructions"
        }
        className="px-2 flex-1 outline-0 placeholder:text-uiBlack/70"
        disabled={isSubmitted} // Disable input when submitted
      />

      <button
        type="submit"
        className="text-sm text-primary disabled:text-uiBlack-light/60"
        disabled={!instructionValue.trim() && !isSubmitted} // Disable if no input and not submitted
      >
        {isSubmitted ? "Remove" : instructionValue.trim() ? "Add" : "Optional"}
      </button>
    </form>
  );
};

export default CookingInstructionForm;
