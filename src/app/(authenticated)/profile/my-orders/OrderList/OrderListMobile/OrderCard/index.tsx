import { Order } from "@/types";
import OrderCardImages from "../../components/OrderCardImages";
import OrderStatus from "../../components/OrderStatus";
import Link from "next/link";

interface OrderCardProps {
  order: Order;
}

const OrderCard = ({ order }: OrderCardProps) => {
  const { id, total_quantity, order_amount, order_status, product_images } =
    order;

  return (
    <Link
      href={`#`}
      className="w-full p-2 border rounded-md flex gap-3 relative"
    >
      <OrderCardImages images={product_images} />

      <div className="flex-1 text-left">
        <p className="font-semibold">Order#{id}</p>
        <p className="text-uiBlack-light text-xs">{total_quantity} items</p>
        <p className="mt-1 text-sm">৳{order_amount.toFixed(2)}</p>

        <div className="absolute bottom-2 right-2">
          <OrderStatus status={order_status} />
        </div>
      </div>
    </Link>
  );
};

export default OrderCard;
