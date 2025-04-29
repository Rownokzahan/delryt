import { Address } from "@/types";
import { useDeleteAddressMutation } from "@/store/features/address/adressApi";
import toast from "react-hot-toast";
import useModalById from "@/hooks/useModalById";

interface AddressCardProps {
  addressItem: Address;
}

const AddressCard = ({ addressItem }: AddressCardProps) => {
  const {
    address,
    address_type,
    contact_person_name,
    contact_person_number,
    is_default,
  } = addressItem;

  const [deleteAddress, { isLoading: isDeleting }] = useDeleteAddressMutation();
  const { openModalWithData } = useModalById("updateAddressModal");

  const handleDelete = async () => {
    try {
      await deleteAddress(addressItem.id).unwrap();
      toast.success("Address deleted successfully!");
    } catch (error) {
      console.log("Failed to delete address", error);
      toast.error("Failed to delete address!");
    }
  };

  const handleUpdate = () => {
    openModalWithData({ address: addressItem });
  };

  return (
    <div className="p-4 border shadow-sm">
      <h4>
        <span className="font-medium">{address_type}</span>{" "}
        {is_default === 1 && <span>(Default)</span>}
      </h4>

      <div className="mt-2 text-sm text-uiBlack-light space-y-px">
        <p className="flex items-center">
          <span className="w-18">Name</span>
          <span>{contact_person_name}</span>
        </p>
        <p className="flex items-center">
          <span className="w-18">Phone</span>
          <span>{contact_person_number}</span>
        </p>
        <p className="flex items-center">
          <span className="w-18">Address</span>
          <span>{address}</span>
        </p>
      </div>

      <div className="mt-3 font-medium text-sm text-primary flex gap-4">
        <button onClick={handleUpdate}>Edit</button>

        {isDeleting ? (
          <p>Deleting..</p>
        ) : (
          <button onClick={handleDelete}>Delete</button>
        )}
      </div>
    </div>
  );
};

export default AddressCard;
