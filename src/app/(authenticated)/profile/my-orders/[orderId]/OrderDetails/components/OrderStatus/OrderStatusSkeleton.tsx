const OrderStatusSkeleton = () => {
  return (
    <div className="p-4 bg-uiWhite rounded-md">
      <div className="mb-3 h-15 rounded-md bg-gray-100 animate-pulse" />

      <div className="px-2 flex justify-between items-center animate-pulse">
        <h3 className="h-6 w-29 bg-gray-100" />
        <p className="h-5 w-20 bg-gray-100" />
      </div>
    </div>
  );
};

export default OrderStatusSkeleton;
