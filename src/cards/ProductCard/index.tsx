import Button from "@/components/ui/Button";
import VegNonVegIcon from "@/components/ui/VegNonVegIcon";
import useModalById from "@/hooks/useModalById";
import { Product } from "@/types";
import { getImagePath } from "@/utils/imageHelper";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { image, product_type, name, description, price } = product || {};

  const imagePath = getImagePath("product", image);
  const isVeg = product_type === "veg" ? true : false;

  //TODO: These valuse should be fetched from the API
  const avgRating = 4.5;
  const beforeDiscountedPrice = price + 100;

  const { openModal: openCustomizationModal } =
    useModalById("customizationModal");

  return (
    <article className="md:p-3">
      <Link
        href={`/product`}
        className="border rounded-md shadow-md flex md:block hover:scale-[1.02] duration-300"
      >
        <figure
          className="w-[40%] shrink-0 md:w-full md:aspect-3/2 rounded-md relative overflow-hidden"
          title={name}
        >
          <Image
            width={300}
            height={200}
            src={imagePath}
            alt={"Product Image"}
            className="absolute h-full w-full object-cover bg-gray-100 rounded-md"
          />
        </figure>

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

              <h4 className="text-uiBlack-light line-through text-xs md:text-xl">
                ₹ {beforeDiscountedPrice}
              </h4>
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
