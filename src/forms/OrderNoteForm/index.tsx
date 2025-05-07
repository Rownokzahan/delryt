import useCheckoutStates from "@/hooks/useCheckoutStates";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FiEdit3 } from "react-icons/fi";

type FormData = {
  orderNote: string;
};

const OrderNoteForm = () => {
  const { register, handleSubmit, reset, watch } = useForm<FormData>();
  const { updateOrderNote, removeOrderNote } = useCheckoutStates();

  const [isOnFocus, setIsOnFocus] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    removeOrderNote();

    return removeOrderNote();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const orderNoteValue = watch("orderNote", ""); // Watch the input field value

  const onSubmit = (data: FormData) => {
    updateOrderNote(data.orderNote);
    setIsSubmitted(true);
  };

  const handleRemove = () => {
    removeOrderNote();
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
        {...register("orderNote")}
        onFocus={() => setIsOnFocus(true)}
        onBlur={() => setIsOnFocus(false)}
        autoComplete="off"
        placeholder={
          isOnFocus
            ? "Type additional details or requests"
            : "Write your order notes"
        }
        className="px-2 flex-1 outline-0 placeholder:text-uiBlack/70 disabled:text-uiBlack-light/90"
        disabled={isSubmitted} // Disable input when submitted
      />

      <button
        type="submit"
        className="text-sm text-primary disabled:text-uiBlack-light/60"
        disabled={!orderNoteValue.trim() && !isSubmitted} // Disable if no input and not submitted
      >
        {isSubmitted ? "Remove" : orderNoteValue.trim() ? "Add" : "Optional"}
      </button>
    </form>
  );
};

export default OrderNoteForm;
