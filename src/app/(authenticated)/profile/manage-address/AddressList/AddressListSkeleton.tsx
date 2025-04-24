import AddressCardSkeleton from "./AddressCard/AddressCardSkeleton";

const AddressListSkeleton = () => {
  return (
    <div className="space-y-4">
      {[...Array(3)].map((_, idx) => (
        <AddressCardSkeleton key={idx} />
      ))}
    </div>
  );
};

export default AddressListSkeleton;
