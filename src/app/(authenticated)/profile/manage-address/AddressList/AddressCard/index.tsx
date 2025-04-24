import { MdEdit, MdDelete } from "react-icons/md";
import { Address } from "@/types";
import { useDeleteAddressMutation } from "@/store/features/address/adressApi";
import toast from "react-hot-toast";
import { TbInnerShadowTopRightFilled } from "react-icons/tb";
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
    <div className="rounded-lg shadow-sm">
      <div className="px-4 pt-3 pb-2 rounded-t-lg bg-primary/5 flex items-center justify-between">
        <h4>
          <span className="font-medium">{address_type}</span>{" "}
          {is_default === 1 && <span>(Default)</span>}
        </h4>

        <div className="flex justify-end gap-4  text-sm font-medium underline">
          <div className="text-red-600 text-lg">
            {isDeleting ? (
              <TbInnerShadowTopRightFilled className="animate-spin flex" />
            ) : (
              <button onClick={handleDelete} className="flex">
                <MdDelete />
              </button>
            )}
          </div>

          <button onClick={handleUpdate} className="flex items-center gap-1">
            <MdEdit className="text-base" />
          </button>
        </div>
      </div>

      <div className="px-4 py-3 text-sm space-y-1">
        <div className="flex items-center">
          <p className="w-18">Name</p>
          <p className="text-uiBlack-light">{contact_person_name}</p>
        </div>
        <div className="flex items-center">
          <p className="w-18">Phone</p>
          <p className="text-uiBlack-light">{contact_person_number}</p>
        </div>
        <div className="flex items-center">
          <p className="w-18">Address</p>
          <p className="text-uiBlack-light">{address}</p>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
