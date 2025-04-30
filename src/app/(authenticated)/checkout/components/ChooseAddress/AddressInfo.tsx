"use client";

import AddAddressButton from "@/components/ui/AddAddressButton";
import { useGetAddressListQuery } from "@/store/features/address/adressApi";
import { useEffect } from "react";
import useModalById from "@/hooks/useModalById";
import useCheckoutStates from "@/hooks/useCheckoutStates";

const AddressInfo = () => {
  const { data: addressList = [], isLoading } = useGetAddressListQuery();
  const { checkoutAddress, updateCheckoutAddress } = useCheckoutStates();
  const { openModal: openChooseAddressModal } =
    useModalById("chooseAddressModal");

  useEffect(() => {
    if (!isLoading && !checkoutAddress && addressList.length > 0) {
      updateCheckoutAddress(addressList[0]);
    }
  }, [isLoading, checkoutAddress, addressList, updateCheckoutAddress]);

  if (isLoading) {
    return <div className="h-16 bg-gray-100" />;
  }

  if (!checkoutAddress && addressList.length === 0) {
    return <AddAddressButton />;
  }

  const { address_type, contact_person_name, contact_person_number, address } =
    checkoutAddress || {};

  return (
    <div className="h-16 pt-1 flex justify-between items-start">
      <div className="space-y-1">
        <div className="flex items-start gap-2">
          <p className="w-16 font-medium">{address_type}</p>
          <div className="border-s ps-2 text-sm">
            <p className="font-medium">{address}</p>
            <p>{contact_person_name}</p>
            <p>{contact_person_number}</p>
          </div>
        </div>
      </div>

      <button
        onClick={openChooseAddressModal}
        className="font-medium text-xs text-primary"
      >
        Change
      </button>
    </div>
  );
};

export default AddressInfo;
