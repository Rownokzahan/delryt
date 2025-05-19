import { Order } from "@/types";
import OrderCard from "./OrderCard";

interface OrderListMobileProps {
  orders: Order[];
}

const OrderListMobile = ({ orders }: OrderListMobileProps) => {
  return (
    <section className="sm:hidden space-y-2">
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </section>
  );
};

export default OrderListMobile;
