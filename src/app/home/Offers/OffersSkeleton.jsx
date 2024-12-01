const OffersSkeleton = () => {
  return (
    <div className="ui-container py-2 md:py-6">
      <div className="flex gap-6 justify-center">
        <div className="rounded-xl bg-gray-200 w-full aspect-[2/1] animate-pulse" />
        <div className="rounded-xl bg-gray-200 w-full aspect-[2/1] animate-pulse hidden sm:block" />
        <div className="rounded-xl bg-gray-200 w-full aspect-[2/1] animate-pulse hidden sm:block" />
      </div>

      <div className="flex gap-2 justify-center mt-4">
        <div className="w-5 h-[6px] bg-gray-200 animate-pulse rounded-3xl" />
        <div className="w-[6px] h-[6px] bg-gray-200 animate-pulse rounded-3xl" />
        <div className="w-[6px] h-[6px] bg-gray-200 animate-pulse rounded-3xl" />
        <div className="w-[6px] h-[6px] bg-gray-200 animate-pulse rounded-3xl" />
      </div>
    </div>
  );
};

export default OffersSkeleton;
