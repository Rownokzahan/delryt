import OrderCostSummarySkeleton from "./components/OrderCostSummary/OrderCostSummarySkeleton";
import OrderCutlerySkeleton from "./components/OrderCutlery/OrderCutlerySkeleton";
import OrderDeliverySkeleton from "./components/OrderDelivery/OrderDeliverySkeleton";
import OrderItemsSkeleton from "./components/OrderItems/OrderItemsSkeleton";
import OrderPaymentSkeleton from "./components/OrderPayment/OrderPaymentSkeleton";
import OrderStatusSkeleton from "./components/OrderStatus/OrderStatusSkeleton";

const OrderDetailsSkeleton = () => {
  return (
    <>
      <OrderStatusSkeleton />
      <OrderDeliverySkeleton />
      <OrderItemsSkeleton />
      <OrderCutlerySkeleton />
      <OrderPaymentSkeleton />
      <OrderCostSummarySkeleton />
    </>
  );
};

export default OrderDetailsSkeleton;
