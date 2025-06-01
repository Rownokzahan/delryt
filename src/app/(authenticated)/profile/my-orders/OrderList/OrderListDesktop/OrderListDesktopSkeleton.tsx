import OrderRowCardSkeleton from "./OrderRowCard/OrderRowCardSkeleton";

const OrderListDesktopSkeleton = () => {
  return (
    <section className="hidden sm:block p-4 bg-uiBlack/1.5">
      <div
        className="h-[calc(100dvh-224px)] overflow-y-auto"
        style={{ scrollbarWidth: "thin" }}
      >
        <div className="border-b-8 border-[#eaeaea]/1 sticky z-10 top-0">
          <div className="h-11 rounded-sm bg-gray-100"/>
        </div>

        <div className="space-y-2">
          {[...Array(4)].map((_, index) => (
            <OrderRowCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrderListDesktopSkeleton;
