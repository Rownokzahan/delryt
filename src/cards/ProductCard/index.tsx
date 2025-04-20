import Button from "@/components/ui/Button";
import VegNonVegIcon from "@/components/ui/VegNonVegIcon";
import useModalById from "@/hooks/useModalById";
import { Product } from "@/types";
import clsx from "clsx";
import Link from "next/link";
import ProductCardImage from "./ProductCardImage";
import { getBeforeDiscountedPrice } from "@/utils/priceHelper";

interface ProductCardProps {
  product: Product;
  noMobileLayoutShift?: boolean;
}

const ProductCard = ({
  product,
  noMobileLayoutShift = false,
}: ProductCardProps) => {
  const {
    id,
    image,
    product_type,
    name,
    description,
    price,
    discount_type,
    discount,
  } = product || {};

  const isVeg = product_type === "veg" ? true : false;

  //TODO: These valuse should be fetched from the API
  const avgRating = 4.5;

  const beforeDiscountedPrice = getBeforeDiscountedPrice(
    price,
    discount,
    discount_type
  );

  const { openModal: openCustomizationModal } =
    useModalById("customizationModal");

  return (
    <article className={clsx(noMobileLayoutShift ? "p-3" : "md:p-3")}>
      <Link
        href={`/product/${id}`}
        className={clsx(
          "border rounded-md shadow-md hover:scale-[1.02] duration-300",
          noMobileLayoutShift ? "block" : "flex md:block"
        )}
      >
        <ProductCardImage
          name={name}
          image={image}
          discount={discount}
          discount_type={discount_type}
          noMobileLayoutShift={noMobileLayoutShift}
        />

        <div className="flex-1 min-w-0 p-3 md:p-0">
          <div className="md:p-3">
            <h5 className="md:text-lg font-medium truncate">
              <VegNonVegIcon isVeg={isVeg} className="me-2 md:-mt-[5px]" />
              <span>{name}</span>
            </h5>

            <p className="h-6 my-2 md:my-3 text-uiBlack-light text-sm truncate leading-5">
              {description}
            </p>

            <div className="h-6 md:h-7">
              {avgRating && (
                <p className="w-max py-1 px-2 text-success bg-success/10 text-xs md:text-sm">
                  ★ {avgRating}
                </p>
              )}
            </div>
          </div>

          <div className="mt-3 md:mt-0 pt-3 md:p-3 border-t flex justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <h4 className="font-medium md:text-xl">₹ {price}</h4>

              {beforeDiscountedPrice > 0 && (
                <h4 className="text-uiBlack-light line-through text-xs md:text-base">
                  ₹ {beforeDiscountedPrice}
                </h4>
              )}
            </div>

            <Button
              onClick={(e) => {
                e.preventDefault();
                openCustomizationModal();
              }}
              variant="primary-outline"
              size="small"
              className="h-max py-1! px-4! !md:px-6 !md:py-2"
            >
              Add
            </Button>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ProductCard;
