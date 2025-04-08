interface ItemCardSkeletonProps {
  label: string;
}

const ItemCardSkeleton = ({ label = "Item 1" }: ItemCardSkeletonProps) => {
  return (
    <div className="p-2 bg-white">
      <div className="flex items-center gap-2">
        <div className="size-9 bg-gray-200" />
        <div>
          <h6 className="font-semibold">{label}</h6>
          <p className="text-xs">Select Product</p>
        </div>
      </div>
      <div className="space-y-2 mt-2 pt-2 border-t">
        <p className="w-full h-2 bg-gray-200" />
        <p className="w-1/2 h-2 bg-gray-200" />
      </div>
    </div>
  );
};

export default ItemCardSkeleton;
