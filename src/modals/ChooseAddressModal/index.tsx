"use client";

import { useGetAddressListQuery } from "@/store/features/address/adressApi";
import Modal from "../Modal";
import AddressOption from "./AddressOption/AddressOption";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import useModalById from "@/hooks/useModalById";
import useCheckoutState from "@/hooks/useCheckoutState";

const ChooseAddressModal = () => {
  const { data: addressList = [] } = useGetAddressListQuery();
  const { checkoutAddress, updateCheckoutAddress } = useCheckoutState();
  const { openModal: openAddAddressModal } = useModalById("addAddressModal");
  const { closeModal } = useModalById("chooseAddressModal");

  const [selectedAddress, setSelectedAddress] = useState(checkoutAddress);

  useEffect(() => {
    setSelectedAddress(checkoutAddress);
  }, [checkoutAddress]);

  const handleSelectAddress = () => {
    if (!selectedAddress) {
      return;
    }

    updateCheckoutAddress(selectedAddress);
    closeModal();
  };

  return (
    <Modal modalId="chooseAddressModal" closeOnOutsideClick={false}>
      <div className="h-13 p-3 border-b shadow-md flex justify-between items-center">
        <h3 className="sm:text-lg font-medium">Select Your Address</h3>
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
            isSelected={selectedAddress?.id === address.id}
            onSelect={() => setSelectedAddress(address)}
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
