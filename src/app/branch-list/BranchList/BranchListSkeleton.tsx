import BranchCardSkeleton from "@/cards/BranchCard/BranchCardSkeleton";

const BranchListSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {[...Array(4)].map((_, idx) => (
        <BranchCardSkeleton key={idx} />
      ))}
    </div>
  );
};

export default BranchListSkeleton;
