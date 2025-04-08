import { ComboCollection, Id } from "@/types";
import clsx from "clsx";

interface MenuModalProps {
  collections: ComboCollection[];
  scrollToCollection: (collectionId: Id) => void;
  activeCollectionId: Id;
}

const CollectionNameList = ({
  collections,
  scrollToCollection,
  activeCollectionId,
}: MenuModalProps) => {
  return (
    <ul>
      {collections.map((collection) => (
        <li
          key={collection.id}
          onClick={() => scrollToCollection(collection.id)}
          className={clsx(
            "px-6 py-4 border-s-4 hover:bg-primary/5 cursor-pointer",
            activeCollectionId === collection.id
              ? "border-primary text-uiBlack font-medium"
              : "border-transparent text-uiBlack-light"
          )}
        >
          {collection.name}
        </li>
      ))}
    </ul>
  );
};

export default CollectionNameList;
