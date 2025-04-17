import ProfileHeaderMobile from "../_components/ProfileHeaderMobile";
import AddAddressButton from "@/components/ui/AddAddressButton";

const ManageAddressPage = () => {
  return (
    <>
      <ProfileHeaderMobile label="Manage Addresses" />

      <main className="p-3">
        <AddAddressButton/>
      </main>
    </>
  );
};

export default ManageAddressPage;