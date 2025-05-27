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
import OrderDetailsNotFound from "./OrderDetailsNotFound";

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
  }

  if (order === undefined) {
    return <OrderDetailsNotFound />;
  }

  return (
    <>
      <OrderStatus order={order} />
      <OrderDelivery order={order} />
      <OrderItems order={order} />
      <OrderCutlery order={order} />
      <OrderPayment />
      <OrderCostSummary order={order} />
    </>
  );
};

export default OrderDetails;
