const AddressCardSkeleton = () => {
  return (
    <div className="rounded-lg shadow-sm animate-pulse">
      <div className="h-11 rounded-t-lg bg-gray-100" />

      <div className="h-23 px-4 py-3 text-sm space-y-1">
        <div className="h-5 w-7/12 bg-gray-100" />
        <div className="h-5 w-5/12 bg-gray-100" />
        <div className="h-5 w-10/12 bg-gray-100" />
      </div>
    </div>
  );
};

export default AddressCardSkeleton;
