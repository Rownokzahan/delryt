import { useGetOrderItemsByIdQuery } from "@/store/features/orders/ordersApi";
import { Id } from "@/types";
import OrderItem from "./OrderItem";
import OrderItemsSkeleton from "./OrderItemsSkeleton";

interface OrderItemsProps {
  orderId: Id;
}

const OrderItems = ({ orderId }: OrderItemsProps) => {
  const {
    data: orderItems,
    isLoading,
    error,
  } = useGetOrderItemsByIdQuery(orderId);

  if (isLoading) {
    return <OrderItemsSkeleton />;
  }

  if (error) {
    console.error("Error fetching order items:", error);
    return;
  }

  return (
    <div className="divide-y">
      {orderItems?.map((oderItem) => (
        <OrderItem key={oderItem.id} orderItem={oderItem} />
      ))}
    </div>
  );
};

export default OrderItems;
