const OrderItemSkeleton = () => {
  return (
    <div className="py-3 flex gap-3 animate-pulse">
      <div className="size-12 object-cover bg-gray-100" />

      <div className="w-full">
        <div className="w-full flex justify-between">
          <h4 className="h-4 w-9/12 bg-gray-100" />
          <h4 className="h-4 w-10 bg-gray-100" />
        </div>

        <h4 className="mt-2 h-4 w-10 bg-gray-100" />
      </div>
    </div>
  );
};

export default OrderItemSkeleton;
