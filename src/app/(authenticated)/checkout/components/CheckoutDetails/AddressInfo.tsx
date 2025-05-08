"use client";

import { FaMapMarkerAlt } from "react-icons/fa";
import InfoCard from "./InfoCard";
import { useGetAddressListQuery } from "@/store/features/address/adressApi";
import useCheckoutStates from "@/hooks/useCheckoutStates";
import useModalById from "@/hooks/useModalById";
import { useEffect } from "react";

const AddressInfo = () => {
  const { data: addressList = [], isLoading } = useGetAddressListQuery();
  const { checkoutAddress, updateCheckoutAddress } = useCheckoutStates();
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
      <InfoCard Icon={FaMapMarkerAlt} label={"Address"} showArrowButton={false}>
        <p className="text-uiBlack-light">Loading address...</p>
      </InfoCard>
    );
  }

  if (!checkoutAddress || addressList.length === 0) {
    return (
      <InfoCard
        Icon={FaMapMarkerAlt}
        label={"Address"}
        onArrowButtonClick={openAddAddressModal}
      >
        <p className="text-uiBlack-light">Add an address</p>
      </InfoCard>
    );
  }

  const { address_type, contact_person_name, contact_person_number, address } =
    checkoutAddress;

  return (
    <InfoCard
      Icon={FaMapMarkerAlt}
      label={address_type}
      onArrowButtonClick={openChooseAddressModal}
    >
      <p>{address}</p>
      <p>{contact_person_name}</p>
      <p>{contact_person_number}</p>
    </InfoCard>
  );
};

export default AddressInfo;
