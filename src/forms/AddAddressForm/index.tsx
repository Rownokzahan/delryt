"use client";

import Button from "@/components/ui/Button";
import AddressTypeSelection from "./AddressTypeSelection";
import { SubmitHandler, useForm } from "react-hook-form";
import AddressInputField from "./AddressInputField";

interface Inputs {
  deliveryAddress: string;
  streetNumber: string;
  houseNumber: string;
  floorNumber: string;
  addressType: string;
}

const AddAddressForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-3 sm:px-8 sm:py-4 bg-gray-100 space-y-3">
        <AddressInputField
          id="deliveryAddress"
          label="Delivery Address"
          placeholder="Delivery Address"
          isRequired={true}
          register={register}
        />
        <AddressInputField
          id="streetNumber"
          label="Street Number"
          placeholder="Street Number"
          isRequired={true}
          register={register}
        />

        <div className="grid grid-cols-2 gap-4">
          <AddressInputField
            id="houseNumber"
            label="House Number"
            placeholder="House Number"
            register={register}
          />
          <AddressInputField
            id="floorNumber"
            label="Floor Number"
            placeholder="Floor Number"
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

export default AddAddressForm;
