import OrderItemSkeleton from "./OrderItem/OrderItemSkeleton";

const OrderItemsSkeleton = () => {
  return (
    <div className="divide-y">
      {[...Array(4)].map((_, index) => (
        <OrderItemSkeleton key={index} />
      ))}
    </div>
  );
};

export default OrderItemsSkeleton;
