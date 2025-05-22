import { Order } from "@/types";
import OrderItem from "./OrderItem";

interface OrderItemsProps {
  order: Order;
}

const OrderItems = ({ order }: OrderItemsProps) => {
  const { details: orderItems } = order;

  return (
    <div className="p-4 bg-uiWhite rounded-md">
      <h3 className="font-medium">Ordered Items</h3>
      <div className="divide-y">
        {orderItems?.map((oderItem) => (
          <OrderItem key={oderItem.id} orderItem={oderItem} />
        ))}
      </div>
    </div>
  );
};

export default OrderItems;
