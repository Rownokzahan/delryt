const ProductContentSkeleton = () => {
  return (
    <section className="ui-container grid grid-cols-1 sm:grid-cols-2 gap-6 animate-pulse">
      <figure className="w-full aspect-3/2 rounded-sm bg-gray-200" />

      <div className="flex flex-col justify-between gap-8">
        <div className="space-y-2">
          <h2 className="h-8 bg-gray-100" />
          <p className="h-6 w-12 bg-gray-100" />

          <p className="h-6 w-11/12 bg-gray-100" />
          <p className="h-6 w-9/12 bg-gray-100" />
        </div>

        <div className="flex justify-between items-center pt-2">
          <div className="w-30 h-10 rounded-md bg-gray-100" />
          <div className="w-28 h-10 rounded-md bg-gray-100" />
        </div>
      </div>
    </section>
  );
};

export default ProductContentSkeleton;
