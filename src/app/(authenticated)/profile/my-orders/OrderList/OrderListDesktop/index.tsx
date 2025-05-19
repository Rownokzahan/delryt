import { Order } from "@/types";
import OrderRowCard from "./OrderRowCard";

interface OrderListDesktopProps {
  orders: Order[];
}

const OrderListDesktop = ({ orders }: OrderListDesktopProps) => {
  return (
    <section className="hidden sm:block mt-8">
      <div className="px-3 mb-3 grid grid-cols-5 place-items-center text-sm">
        <p className="place-self-start truncate">Order Details</p>
        <p>Quantity</p>
        <p>Order Id</p>
        <p>Total</p>
        <p>Status</p>
      </div>

      <div
        className="space-y-2 max-h-[calc(100dvh-315px)] overflow-y-auto pe-2"
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
