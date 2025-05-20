import OrderCardSkeleton from "./OrderCard/OrderCardSkeleton";

const OrderListMobileSkeleton = () => {
  return (
    <section className="sm:hidden space-y-2">
      {[...Array(4)].map((_, index) => (
        <OrderCardSkeleton key={index} />
      ))}
    </section>
  );
};

export default OrderListMobileSkeleton;
