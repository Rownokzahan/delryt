import { ComboCollection, Id } from "@/types";
import { RefObject } from "react";
import ProductCollection from "./ProductCollection";

interface ProductCollectionsProps {
  collections: ComboCollection[];
  collectionRefs: RefObject<Map<Id, HTMLDivElement>>;
  collectionContainerClass?: string;
}

const ProductCollections = ({
  collections,
  collectionRefs,
  collectionContainerClass,
}: ProductCollectionsProps) => {
  const setCollectionRef = (id: Id, element: HTMLDivElement | null) => {
    if (element) {
      collectionRefs.current.set(id, element);
    } else {
      collectionRefs.current.delete(id);
    }
  };

  return (
    <div className="flex-1 space-y-6 md:space-y-12">
      {collections.map((collection) => (
        <ProductCollection
          key={collection.id}
          collection={collection}
          setCollectionRef={setCollectionRef}
          collectionContainerClass={collectionContainerClass}
        />
      ))}
    </div>
  );
};

export default ProductCollections;
