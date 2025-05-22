"use client";

import { useGetOrderByIdQuery } from "@/store/features/orders/ordersApi";
import { Id } from "@/types";

import OrderDelivery from "./components/OrderDelivery";
import OrderCostSummary from "./components/OrderCostSummary";
import OrderCutlery from "./components/OrderCutlery";
import OrderPayment from "./components/OrderPayment";
import OrderStatus from "./components/OrderStatus";
import OrderItems from "./components/OrderItems";
import OrderDetailsSkeleton from "./OrderDetailsSkeleton";

interface OrderDetails {
  orderId: Id;
}

const OrderDetails = ({ orderId }: OrderDetails) => {
  const { data: order, isLoading, error } = useGetOrderByIdQuery(orderId);

  if (isLoading) {
    return <OrderDetailsSkeleton />;
  }

  if (error) {
    console.error("Error fetching order details:", error);
    return;
  }

  if (order === undefined) {
    return <>No Order Found</>;
  }

  return (
    <div className="p-4 bg-uiBlack/10 space-y-4">
      <OrderStatus order={order} />
      <OrderDelivery order={order} />
      <OrderPayment />
      <OrderCostSummary order={order} />
      <OrderCutlery order={order} />
      <OrderItems order={order} />
    </div>
  );
};

export default OrderDetails;
