"use client";

import AddressForm from "@/forms/profile/AddressForm";
import Modal from "../Modal";
import useUser from "@/hooks/useUser";
import { Address } from "@/types";
import { useCreateAddressMutation } from "@/store/features/address/adressApi";
import toast from "react-hot-toast";
import useModalById from "@/hooks/useModalById";

const AddAddressModal = () => {
  const { user } = useUser();
  const [createAddress, { isLoading: isCreating }] = useCreateAddressMutation();
  const { closeModal, isModalOpen } = useModalById("addAddressModal");

  if (!isModalOpen) {
    return null;
  }

  if (!user) {
    console.log("User Not Found From Address Modal");
    return null;
  }

  const { f_name, l_name, phone } = user || {};

  const handleCreateAddress = async (address: Address) => {
    try {
      await createAddress(address).unwrap();
      toast.success("Address saved successfully!");

      closeModal();
    } catch (error) {
      toast.error("Failed to save address. Please try again!");
      console.error("Address creation error:", error);
    }
  };

  return (
    <Modal modalId="addAddressModal">
      <div className="p-3 border-b shadow-md">
        <h3 className="text-lg font-medium">Add New Address</h3>
      </div>

      <AddressForm
        defaultValues={{
          contact_person_name: `${f_name} ${l_name}`,
          contact_person_number: phone,
        }}
        onSubmit={(data) => {
          handleCreateAddress(data);
        }}
        isSubmitting={isCreating}
      />
    </Modal>
  );
};

export default AddAddressModal;
