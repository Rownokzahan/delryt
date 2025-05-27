import OrderItemSkeleton from "./OrderItem/OrderItemSkeleton";

const OrderItemsSkeleton = () => {
  return (
    <div className="p-4 bg-uiWhite rounded-md">
      <h3 className="h-6 w-28 bg-gray-100 animate-pulse" />
      <div className="divide-y">
        {[...Array(4)].map((_, index) => (
          <OrderItemSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};

export default OrderItemsSkeleton;
