import { OrderStatusType } from "@/types";
import clsx from "clsx";

export const orderStatusMap: Record<
  OrderStatusType,
  {
    label: string;
    className: string;
  }
> = {
  pending: {
    label: "Pending",
    className: "bg-yellow-100 text-yellow-800",
  },
  confirmed: {
    label: "Confirmed",
    className: "bg-blue-100 text-blue-800",
  },
  processing: {
    label: "Processing",
    className: "bg-indigo-100 text-indigo-800",
  },
  out_for_delivery: {
    label: "Out for Delivery",
    className: "bg-orange-100 text-orange-800",
  },
  delivered: {
    label: "Delivered",
    className: "bg-green-100 text-green-800",
  },
  canceled: {
    label: "Canceled",
    className: "bg-red-100 text-red-800",
  },
  returned: {
    label: "Returned",
    className: "bg-gray-100 text-gray-800",
  },
  failed: {
    label: "Failed",
    className: "bg-rose-100 text-rose-800",
  },
};

interface OrderStatusProps {
  status: OrderStatusType;
}

const OrderStatus = ({ status }: OrderStatusProps) => {
  const statusInfo = orderStatusMap[status];

  return (
    <div
      className={clsx(
        "px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium place-self-center",
        statusInfo.className
      )}
    >
      {statusInfo.label}
    </div>
  );
};

export default OrderStatus;
