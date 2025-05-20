import { Order } from "@/types";
import OrderRowCard from "./OrderRowCard";

interface OrderListDesktopProps {
  orders: Order[];
}

const OrderListDesktop = ({ orders }: OrderListDesktopProps) => {
  return (
    <section className="hidden sm:block">
      <div className="p-3 pt-4 rounded-t-md bg-gray-200 grid grid-cols-5 place-items-center text-sm font-medium">
        <p className="place-self-start truncate">Order Details</p>
        <p>Quantity</p>
        <p>Order Id</p>
        <p>Total</p>
        <p>Status</p>
      </div>

      <div
        className="space-y-2 pt-2 max-h-[calc(100dvh-244px)] overflow-y-auto"
        style={{ scrollbarWidth: "thin" }}
      >
        {orders.map((order) => (
          <OrderRowCard key={order.id} order={order} />
        ))}
      </div>
    </section>
  );
};

export default OrderListDesktop;
