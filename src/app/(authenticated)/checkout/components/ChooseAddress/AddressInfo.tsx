"use client";

import AddAddressButton from "@/components/ui/AddAddressButton";
import { useGetAddressListQuery } from "@/store/features/address/adressApi";
import { useEffect } from "react";
import useModalById from "@/hooks/useModalById";
import useCheckoutStates from "@/hooks/useCheckoutStates";
import { MdOutlineEditLocationAlt } from "react-icons/md";

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
    <div className="h-16 pt-1 flex justify-between items-start gap-3">
      <h4 className="text-sm sm:text-base font-medium">{address_type}</h4>

      <div className="flex-1 min-w-0 border-s ps-3">
        <p className="font-medium text-sm truncate">
          {address} Extra long long text
        </p>
        <p className="text-xs sm:text-sm truncate">{contact_person_name}</p>
        <p className="text-xs sm:text-sm truncate">{contact_person_number}</p>
      </div>

      <button
        onClick={openChooseAddressModal}
        className="shrink-0 text-xl text-primary"
      >
        <MdOutlineEditLocationAlt />
      </button>
    </div>
  );
};

export default AddressInfo;
