import { ComboCollection, Id } from "@/types";
import ProductCard from "@/cards/ProductCard";
import clsx from "clsx";

interface ProductCollectionProps {
  collection: ComboCollection;
  setCollectionRef: (id: Id, element: HTMLDivElement | null) => void;
  collectionContainerClass?: string;
}

const ProductCollection = ({
  collection,
  setCollectionRef,
  collectionContainerClass = "",
}: ProductCollectionProps) => {
  const { id, name, products } = collection || {};

  return (
    <div
      ref={(el) => setCollectionRef(id, el)}
      data-id={id} // Add data-id for easier identification
      className={collectionContainerClass}
    >
      <h3
        className={clsx(
          "p-3 -mx-3 sticky -top-px z-10 text-lg font-medium bg-uiWhite",
          "md:mb-3 md:p-0 md:mx-0 md:static md:text-2xl"
        )}
      >
        {name}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductCollection;
