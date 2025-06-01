import { Order } from "@/types";
import OrderRowCard from "./OrderRowCard";

interface OrderListDesktopProps {
  orders: Order[];
}

const OrderListDesktop = ({ orders }: OrderListDesktopProps) => {
  return (
    <section className="hidden sm:block p-4 bg-uiBlack/10">
      <div className="max-h-[calc(100dvh-224px)] overflow-y-auto" style={{ scrollbarWidth:"thin" }}>
        <div className="border-b-8 border-[#eaeaea] sticky z-10 top-0">
          <div className="p-3 rounded-sm bg-uiWhite grid grid-cols-5 place-items-center text-sm font-medium">
            <p className="place-self-start truncate">Order Details</p>
            <p>Quantity</p>
            <p>Order Id</p>
            <p>Total</p>
            <p>Status</p>
          </div>
        </div>

        <div className="space-y-2" style={{ scrollbarWidth: "thin" }}>
          {orders.map((order) => (
            <OrderRowCard key={order.id} order={order} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrderListDesktop;
