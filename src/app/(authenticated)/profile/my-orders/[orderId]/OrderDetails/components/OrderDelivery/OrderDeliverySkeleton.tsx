const OrderDeliverySkeleton = () => {
  return (
    <div className="p-4 bg-uiWhite rounded-md">
      <h3 className="h-6 w-24 bg-gray-100 animate-pulse" />
      <div className="text-sm divide-y animate-pulse space-y-1">
        <div className="py-1 pb-2 flex gap-1">
          <div className="size-5 bg-gray-100" />
          <div className="space-y-1 flex-1">
            <p className="h-4 w-16 bg-gray-100" />
            <p className="h-3 w-9/12 bg-gray-100" />
          </div>
        </div>

        <div className="py-1 flex gap-1">
          <div className="size-5 bg-gray-100" />
          <div className="space-y-1 flex-1">
            <p className="h-4 w-16 bg-gray-100" />
            <p className="h-3 w-9/12 bg-gray-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDeliverySkeleton;
