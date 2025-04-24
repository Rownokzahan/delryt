"use client"

import AddressForm from "@/forms/AddressForm";
import Modal from "../Modal";
import useUser from "@/hooks/useUser";
import { Address } from "@/types";
import { useCreateAddressMutation } from "@/store/features/address/adressApi";
import toast from "react-hot-toast";
import useModalById from "@/hooks/useModalById";

const AddAddressModal = () => {
  const { user } = useUser();
  const [createAddress] = useCreateAddressMutation();
  const { closeModal } = useModalById("addAddressModal");

  if (!user) {
    return <p>No User Found</p>;
  }

  const { f_name, l_name, phone } = user;

  const handleCreateAddress = (data: Address) => {
    createAddress(data)
      .unwrap()
      .then(() => {
        toast.success("Address saved successfully!", {
          position: "top-center",
          duration: 3000,
        });
        closeModal();
      })
      .catch((error) => {
        toast.error("Failed to save address. Please try again!", {
          position: "top-center",
          duration: 4000,
        });

        console.error("Address creation error:", error);
      });
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
      />
    </Modal>
  );
};

export default AddAddressModal;
