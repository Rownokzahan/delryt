import AddToCartButton from "@/components/ui/AddToCartButton";
import VegNonVegIcon from "@/components/ui/VegNonVegIcon";
import useModalById from "@/hooks/useModalById";
import { Product } from "@/types";
import { getImagePath } from "@/utils/imageHelper";
import { getBeforeDiscountedPrice } from "@/utils/priceHelper";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { LuShare2 } from "react-icons/lu";

interface ProductContentProps {
  product: Product;
}

const ProductContent = ({ product }: ProductContentProps) => {
  const { openModal: openShareModal } = useModalById("shareModal");

  const {
    image,
    product_type,
    name,
    description,
    price,
    discount,
    discount_type,
  } = product || {};

  const imagePath = getImagePath("product", image);
  const isVeg = product_type === "veg" ? true : false;
  const beforeDiscountedPrice = getBeforeDiscountedPrice(
    price,
    discount,
    discount_type
  );

  //TODO: This valuse should be calculated
  const avgRating = 4.5;

  return (
    <section className="ui-container grid grid-cols-1 sm:grid-cols-2 gap-6">
      <figure>
        <Image
          width={300}
          height={200}
          src={imagePath}
          alt={"Product Image 1"}
          className="w-full aspect-3/2 object-cover border rounded-sm"
        />
      </figure>

      <div className="flex flex-col justify-between gap-8">
        <div className="space-y-2">
          <div className="flex gap-2 justify-between">
            <h3 className="pt-1">
              <VegNonVegIcon isVeg={isVeg} className="me-1 -mt-1 sm:-mt-2" />
              <span className="font-medium lg:text-2xl">{name}</span>
            </h3>

            <button
              onClick={openShareModal}
              className="shrink-0 lg:ms-auto h-max px-3 py-1 flex items-center gap-2"
            >
              <span className="text-uiBlack-light">Share</span>
              <LuShare2 className="text-primary" />
            </button>
          </div>

          <div className="size-max py-1 px-2 text-success bg-success/20 text-xs md:text-base flex items-center gap-1">
            <FaStar className="mb-1" />
            <span className="font-medium">{avgRating}</span>
          </div>

          <p className="text-sm lg:text-base text-pretty">{description}</p>
        </div>

        <div className="flex justify-between items-center pt-2">
          {/* Product Price */}
          <div className="h-max flex gap-2">
            <p className="text-xl font-medium">৳ {price}</p>
            {beforeDiscountedPrice > 0 && (
              <p className="self-end text-uiBlack-light line-through text-sm lg:text-base">
                ৳ {beforeDiscountedPrice}
              </p>
            )}
          </div>

          {/* Add to Cart Button */}
          <AddToCartButton product={product} />
        </div>
      </div>
    </section>
  );
};

export default ProductContent;
