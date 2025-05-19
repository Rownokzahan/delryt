import OrderRowCardSkeleton from "./OrderRowCard/OrderRowCardSkeleton";

const OrderListDesktopSkeleton = () => {
  return (
    <section className="mt-8">
      <div className="h-5 mb-3 bg-gray-200 animate-pulse" />

      <div className="space-y-2">
        {[...Array(3)].map((_, index) => (
          <OrderRowCardSkeleton key={index} />
        ))}
      </div>
    </section>
  );
};

export default OrderListDesktopSkeleton;
