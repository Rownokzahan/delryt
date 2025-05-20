import OrderRowCardSkeleton from "./OrderRowCard/OrderRowCardSkeleton";

const OrderListDesktopSkeleton = () => {
  return (
    <section className="hidden sm:block">
      <div className="h-12 p-3 pt-4 rounded-t-md bg-gray-100 animate-pulse" />

      <div className="space-y-2 pt-2">
        {[...Array(3)].map((_, index) => (
          <OrderRowCardSkeleton key={index} />
        ))}
      </div>
    </section>
  );
};

export default OrderListDesktopSkeleton;
