const AddressCardSkeleton = () => {
  return (
    <div className="p-4 border shadow-sm animate-pulse">
      <div className="h-6 w-20 bg-gray-100" />

      <div className="mt-3 space-y-1">
        <p className="h-4 w-9/12 bg-gray-100" />
        <p className="h-4 w-6/12 bg-gray-100" />
        <p className="h-4 w-10/12 bg-gray-100" />
      </div>

      <div className="mt-3 flex gap-4">
        <p className="h-5 w-11 bg-gray-100" />
        <p className="h-5 w-11 bg-gray-100" />
      </div>
    </div>
  );
};

export default AddressCardSkeleton;
