"use client";

import { RiMapPinLine } from "react-icons/ri";
import InfoCard from "./InfoCard";
import { useGetAddressListQuery } from "@/store/features/address/adressApi";
import useCheckoutState from "@/hooks/useCheckoutState";
import useModalById from "@/hooks/useModalById";
import { useEffect } from "react";

const AddressInfo = () => {
  const { data: addressList = [], isLoading } = useGetAddressListQuery();
  const { checkoutAddress, updateCheckoutAddress } = useCheckoutState();
  const { openModal: openChooseAddressModal } =
    useModalById("chooseAddressModal");

  const { openModal: openAddAddressModal } = useModalById("addAddressModal");

  useEffect(() => {
    if (!isLoading && !checkoutAddress && addressList.length > 0) {
      updateCheckoutAddress(addressList[0]);
    }
  }, [isLoading, checkoutAddress, addressList, updateCheckoutAddress]);

  if (isLoading) {
    return (
      <InfoCard Icon={RiMapPinLine} label={"Address"} showArrowButton={false}>
        <p className="text-uiBlack-light">Loading address...</p>
      </InfoCard>
    );
  }

  if (!checkoutAddress || addressList.length === 0) {
    return (
      <InfoCard
        Icon={RiMapPinLine}
        label={"Address"}
        onArrowButtonClick={openAddAddressModal}
      >
        <p className="text-uiBlack-light">Add an address</p>
      </InfoCard>
    );
  }

  const { address_type, contact_person_name, contact_person_number, address } =
    checkoutAddress || {};

  return (
    <InfoCard
      Icon={RiMapPinLine}
      label={address_type}
      onArrowButtonClick={openChooseAddressModal}
    >
      <div className="space-y-px">
        <p className="truncate">{address}</p>
        <p className="truncate">{contact_person_name}</p>
        <p className="truncate">{contact_person_number}</p>
      </div>
    </InfoCard>
  );
};

export default AddressInfo;
