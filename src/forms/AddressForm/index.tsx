"use client";

import AddressTypeSelection from "./AddressTypeSelection";
import { Address } from "@/types";
import { SubmitHandler, useForm } from "react-hook-form";
import InputField from "../components/InputField";
import SubmitButton from "../components/SubmitButton";

interface AddressFormProps {
  defaultValues?: Partial<Address>;
  onSubmit: SubmitHandler<Address>;
  isSubmitting: boolean;
}

const AddressForm = ({
  defaultValues,
  onSubmit,
  isSubmitting,
}: AddressFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<Address>({
    defaultValues,
    mode: "onChange",
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-3 sm:px-8 sm:py-4 bg-gray-100 max-h-[70vh] overflow-y-auto space-y-3">
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          <InputField
            id="contact_person_name"
            label="Full Name"
            placeholder="Full Name"
            isRequired={true}
            register={register}
          />

          <InputField
            id="contact_person_number"
            label="Phone Number"
            placeholder="Phone Number"
            isRequired={true}
            register={register}
          />
        </div>

        <InputField
          id="address"
          label="Delivery Address"
          placeholder="Delivery Address"
          isRequired={true}
          register={register}
        />
        <InputField
          id="road"
          label="Street"
          placeholder="Street"
          register={register}
        />
        <div className="grid grid-cols-2 gap-4">
          <InputField
            id="house"
            label="House"
            placeholder="House"
            register={register}
          />
          <InputField
            id="floor"
            label="Floor"
            placeholder="Floor"
            register={register}
          />
        </div>

        <AddressTypeSelection register={register} />
      </div>

      {/* Submit Button */}
      <SubmitButton
        label="Save Address Details"
        isFormValid={isValid}
        isSubmitting={isSubmitting}
      />
    </form>
  );
};

export default AddressForm;
