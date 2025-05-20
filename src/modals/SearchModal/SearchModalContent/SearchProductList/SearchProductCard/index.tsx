import VegNonVegIcon from "@/components/ui/VegNonVegIcon";
import { Product } from "@/types";
import { getImagePath } from "@/utils/imageHelper";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

interface SearchProductCardProps {
  product: Product;
}

const SearchProductCard = ({ product }: SearchProductCardProps) => {
  const { id, image, name, product_type, price } = product;

  const isVeg = product_type === "veg" ? true : false;

  return (
    <Link href={`/product/${id}`} className="p-3 bg-gray-100 flex gap-3">
      <Image
        width={300}
        height={200}
        src={getImagePath("product", image)}
        alt={"Product Image"}
        className="size-13 object-cover bg-gray-100"
      />

      <div className="flex-1 min-w-0 space-y-px">
        <p className="truncate">
          <VegNonVegIcon
            isVeg={isVeg}
            className="float-left !size-3 mt-[6px] me-1"
          />
          <span>{name}</span>
        </p>

        <p className="text-uiBlack-light">৳ {price}</p>
      </div>

      <IoIosArrowForward className="shrink-0 text-sm place-self-center" />
    </Link>
  );
};

export default SearchProductCard;
