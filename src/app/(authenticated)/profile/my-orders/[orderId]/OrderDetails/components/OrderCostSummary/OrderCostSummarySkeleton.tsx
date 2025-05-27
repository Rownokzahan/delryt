const OrderCostSummarySkeleton = () => {
  return (
    <div className="h-43 p-4 bg-uiWhite rounded-md">
      <h3 className="h-5 w-32 mt-1 bg-gray-100 animate-pulse" />
      <div className="mt-3 text-sm space-y-2 animate-pulse">
        <div className="flex justify-between">
          <div className="h-3 w-24 bg-gray-100" />
          <div className="h-3 w-22 bg-gray-100" />
        </div>

        <div className="flex justify-between">
          <div className="h-3 w-34 bg-gray-100" />
          <div className="h-3 w-12 bg-gray-100" />
        </div>

        <div className="flex justify-between">
          <div className="h-3 w-32 bg-gray-100" />
          <div className="h-3 w-10 bg-gray-100" />
        </div>

        <div className="flex justify-between">
          <div className="h-3 w-28 bg-gray-100" />
          <div className="h-3 w-12 bg-gray-100" />
        </div>

        <div className="border-t pt-2 mt-3 flex justify-between">
          <div className="h-3 w-18 bg-gray-100" />
          <div className="h-3 w-22 bg-gray-100" />
        </div>
      </div>
    </div>
  );
};

export default OrderCostSummarySkeleton;
