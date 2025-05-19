"use client";

import { useGetOrdersQuery } from "@/store/features/orders/ordersApi";
import OrderListDesktop from "./OrderListDesktop";
import OrderListMobile from "./OrderListMobile";
import OrderListDesktopSkeleton from "./OrderListDesktop/OrderListDesktopSkeleton";
import OrderListNotFound from "./OrderListNotFound";

const OrderList = () => {
  const { data: orders = [], isLoading, error } = useGetOrdersQuery();

  if (isLoading) {
    return (
      <>
        <OrderListDesktopSkeleton />
      </>
    );
  }

  if (error) {
    console.error("Error fetching orders:", error);
  }

  if (orders.length === 0) {
    return <OrderListNotFound />;
  }

  return (
    <>
      <OrderListDesktop orders={orders} />
      <OrderListMobile orders={orders} />
    </>
  );
};

export default OrderList;
