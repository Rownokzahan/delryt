"use client"

import Button from "@/components/ui/Button";
import AddressInputField from "./AddressInputField";
import AddressTypeSelection from "./AddressTypeSelection";
import { Address } from "@/types";
import { SubmitHandler, useForm } from "react-hook-form";

interface AddressFormProps {
  defaultValues?: Partial<Address>;
  onSubmit: SubmitHandler<Address>;
}

const AddressForm = ({ defaultValues, onSubmit }: AddressFormProps) => {
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
          <AddressInputField
            id="contact_person_name"
            label="Full Name"
            placeholder="Full Name"
            isRequired={true}
            register={register}
          />

          <AddressInputField
            id="contact_person_number"
            label="Phone Number"
            placeholder="Phone Number"
            isRequired={true}
            register={register}
          />
        </div>

        <AddressInputField
          id="address"
          label="Delivery Address"
          placeholder="Delivery Address"
          isRequired={true}
          register={register}
        />
        <AddressInputField
          id="road"
          label="Street"
          placeholder="Street"
          register={register}
        />
        <div className="grid grid-cols-2 gap-4">
          <AddressInputField
            id="house"
            label="House"
            placeholder="House"
            register={register}
          />
          <AddressInputField
            id="floor"
            label="Floor"
            placeholder="Floor"
            register={register}
          />
        </div>

        <AddressTypeSelection register={register} />
      </div>

      {/* Submit Button */}
      <div className="px-3 py-2 shadow-md">
        <Button disabled={!isValid} type="submit" className="w-full">
          Save Address Details
        </Button>
      </div>
    </form>
  );
};

export default AddressForm;
