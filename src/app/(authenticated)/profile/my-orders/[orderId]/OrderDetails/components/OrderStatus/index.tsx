import { Order } from "@/types";

interface OrderStatusProps {
  order: Order;
}

const OrderStatus = ({ order }: OrderStatusProps) => {
  const { id, delivery_date, order_status } = order;

  return (
    <div className="p-4 bg-uiWhite rounded-md">
      <div className="mb-3 p-4 rounded-md bg-primary/10 text-lg font-medium text-center text-primary">
        Your Order is{" "}
        <span className="text-nowrap capitalize">
          {order_status.replace(/_/g, " ")}
        </span>
      </div>

      <div className="px-2 flex justify-between items-center">
        <h3 className="font-medium">Order#{id}</h3>
        <p className="text-sm text-uiBlack-light">{delivery_date}</p>
      </div>
    </div>
  );
};

export default OrderStatus;
