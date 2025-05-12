import useCheckoutStates from "@/hooks/useCheckoutStates";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

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
      className="w-full flex justify-between items-start"
    >
      <input
        {...register("orderNote")}
        onFocus={() => setIsOnFocus(true)}
        onBlur={() => setIsOnFocus(false)}
        autoComplete="off"
        placeholder={
          isOnFocus
            ? "Add details or requests..."
            : "Write order notes here...."
        }
        className="py-px flex-1 outline-0 placeholder:text-uiBlack-light/80 text-uiBlack disabled:text-uiBlack-light/90"
        disabled={isSubmitted}
      />

      {orderNoteValue.trim() ? (
        <button
          type="submit"
          className="w-14 text-sm text-end font-medium text-primary disabled:text-uiBlack-light/60"
          disabled={!orderNoteValue.trim() && !isSubmitted} // Disable if no input and not submitted
        >
          {isSubmitted ? "Remove" : "Add"}
        </button>
      ) : (
        <p className="w-14 text-sm">Optional</p>
      )}
    </form>
  );
};

export default OrderNoteForm;
