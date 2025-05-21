import { Order } from "@/types";
import OrderCardImages from "../../components/OrderCardImages";
import OrderStatus from "../../components/OrderStatus";
import Link from "next/link";

interface OrderRowCardProps {
  order: Order;
}

const OrderRowCard = ({ order }: OrderRowCardProps) => {
  const { id, total_quantity, order_amount, order_status, product_images } =
    order;

  return (
    <Link
      href={`/profile/my-orders/${id}`}
      className="p-3 border rounded-md grid grid-cols-5 place-items-center"
    >
      <OrderCardImages images={product_images} />
      <p className="text-uiBlack-light text-sm">{total_quantity} items</p>
      <p className="font-semibold">#{id}</p>
      <p className="font-medium">{order_amount.toFixed(2)}</p>
      <OrderStatus status={order_status} />
    </Link>
  );
};

export default OrderRowCard;
