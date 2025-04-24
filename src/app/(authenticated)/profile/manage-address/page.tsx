import ProfileHeaderMobile from "../_components/ProfileHeaderMobile";
import AddAddressButton from "@/components/ui/AddAddressButton";
import AddressList from "./AddressList";

const ManageAddressPage = () => {
  return (
    <>
      <ProfileHeaderMobile label="Manage Addresses" />

      <main className="p-3 space-y-4">
        <AddAddressButton />
        <AddressList />
      </main>
    </>
  );
};

export default ManageAddressPage;
