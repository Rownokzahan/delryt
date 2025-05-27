const OrderPaymentSkeleton = () => {
  return (
    <div className="p-4 bg-uiWhite rounded-md">
      <h3 className="h-5 w-20 my-1 bg-gray-100 animate-pulse" />
      <div className="mt-1 flex items-center gap-1 animate-pulse">
        <div className="size-5 bg-gray-100" />
        <p className="h-4 w-29 bg-gray-100" />
      </div>
    </div>
  );
};

export default OrderPaymentSkeleton;
