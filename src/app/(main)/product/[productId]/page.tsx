import SectionSeparator from "@/components/ui/SectionSeparator";
import ProductDisplay from "./components/ProductDisplay";

type ProductPageProps = {
  params: {
    productId: string;
  };
};

const ProductPage = ({ params }: ProductPageProps) => {
  const { productId } = params;

  return (
    <main className="space-y-8 my-8 mt-4 sm:space-y-12 sm:mb-12">
      <ProductDisplay productId={productId} />
      <SectionSeparator />
    </main>
  );
};

export default ProductPage;
