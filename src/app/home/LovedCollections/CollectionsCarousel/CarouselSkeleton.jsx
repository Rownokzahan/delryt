import ProgressBar from "@/components/ProgressBar";
import CollectionCardSkeleton from "../CollectionCard/CollectionCardSkeleton";

const CarouselSkeleton = () => {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3">
        {[...Array(3)].map((_, index) => (
          <CollectionCardSkeleton key={index} />
        ))}
      </div>

      <ProgressBar
        variant="skeleton"
        progress={30}
        extraClasses={"mb-8 sm:hidden"}
      />
    </>
  );
};

export default CarouselSkeleton;
