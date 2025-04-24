"use client";

import { useGetAddressListQuery } from "@/store/features/address/adressApi";
import AddressListSkeleton from "./AddressListSkeleton";
import AddressCard from "./AddressCard";

const AddressList = () => {
  const { data: addressList = [], error, isLoading } = useGetAddressListQuery();

  if (isLoading) {
    return <AddressListSkeleton />;
  }

  if (error) {
    console.error("Failed to fetch address list:", error);
  }

  if ((!isLoading && addressList.length === 0) || error) {
    return (
      <p className="mt-10 text-center text-uiBlack-light">No address found.</p>
    );
  }

  return (
    <div className="space-y-4">
      {addressList.map((address) => (
        <AddressCard key={address.id} addressItem={address} />
      ))}
    </div>
  );
};

export default AddressList;
