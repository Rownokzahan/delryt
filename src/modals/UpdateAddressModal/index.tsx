"use client";

import AddressForm from "@/forms/AddressForm";
import Modal from "../Modal";
import useModalById from "@/hooks/useModalById";
import { Address } from "@/types";
import toast from "react-hot-toast";
import { useUpdateAddressMutation } from "@/store/features/address/adressApi";

const UpdateAddressModal = () => {
  const { isModalOpen, modalData, closeModal } =
    useModalById("updateAddressModal");

  const [updateAddress, { isLoading: isUpdating }] = useUpdateAddressMutation();

  if (!isModalOpen) {
    return null;
  }

  const addressData = (modalData as { address: Address | undefined })?.address;

  if (!addressData) {
    console.warn("Address data is missing in UpdateAddressModal.", {
      modalData,
    });

    return null;
  }

  const handleUpdateAddress = async (address: Address) => {
    try {
      await updateAddress({
        addressId: address.id,
        updatedAddress: address,
      }).unwrap();
      toast.success("Address updated successfully!");

      closeModal();
    } catch (error) {
      toast.error("Failed to update address. Please try again!");
      console.error("Address updation error:", error);
    }
  };

  return (
    <Modal modalId="updateAddressModal">
      <div className="p-3 border-b shadow-md">
        <h3 className="text-lg font-medium">Add New Address</h3>
      </div>

      <AddressForm
        defaultValues={{ ...addressData }}
        onSubmit={(data) => {
          handleUpdateAddress(data);
        }}
        isSubmitting={isUpdating}
      />
    </Modal>
  );
};

export default UpdateAddressModal;
