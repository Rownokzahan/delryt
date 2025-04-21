import SectionSeparator from "@/components/ui/SectionSeparator";
import ProductDisplay from "./components/ProductDisplay";
import RelatedProducts from "./components/RelatedProducts";

type ProductPageProps = {
  params: {
    productId: string;
  };
};

const ProductPage = async ({ params }: ProductPageProps) => {
  const { productId } = await params;

  return (
    <main className="my-8 mt-4">
      <ProductDisplay productId={productId} />
      <SectionSeparator className="mt-12" />
      <RelatedProducts productId={productId} />
    </main>
  );
};

export default ProductPage;
