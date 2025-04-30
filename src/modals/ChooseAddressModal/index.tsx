"use client";

import { useGetAddressListQuery } from "@/store/features/address/adressApi";
import { useCheckoutProvider } from "@/app/(authenticated)/checkout/CheckoutProvider";
import Modal from "../Modal";
import AddressOption from "./AddressOption/AddressOption";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import useModalById from "@/hooks/useModalById";

const ChooseAddressModal = () => {
  const { data: addressList = [] } = useGetAddressListQuery();
  const { selectedAddress, setSelectedAddress } = useCheckoutProvider();
  const { openModal: openAddAddressModal } = useModalById("addAddressModal");
  const { closeModal } = useModalById("chooseAddressModal");

  const [tempSelectedAddress, setTempSelectedAddress] =
    useState(selectedAddress);

  useEffect(() => {
    setTempSelectedAddress(selectedAddress);
  }, [selectedAddress]);

  const handleSelectAddress = () => {
    setSelectedAddress(tempSelectedAddress);
    closeModal();
  };

  return (
    <Modal modalId="chooseAddressModal" closeOnOutsideClick={false}>
      <div className="p-3 border-b shadow-md flex justify-between items-center">
        <h3 className="text-lg font-medium">Select Your Address</h3>
        <button
          onClick={openAddAddressModal}
          className="text-sm text-primary font-medium"
        >
          Add New Address
        </button>
      </div>

      <div className="p-3 sm:px-8 sm:py-4 bg-gray-100 max-h-[70vh] overflow-y-auto space-y-3">
        {addressList.map((address) => (
          <AddressOption
            key={address.id}
            addressItem={address}
            isSelected={tempSelectedAddress?.id === address.id}
            onSelect={() => setTempSelectedAddress(address)}
          />
        ))}
      </div>

      <div className="px-3 py-2 shadow-md">
        <Button onClick={handleSelectAddress} className="w-full">
          Select Address
        </Button>
      </div>
    </Modal>
  );
};

export default ChooseAddressModal;
