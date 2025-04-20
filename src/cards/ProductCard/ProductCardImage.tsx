import { getImagePath } from "@/utils/imageHelper";
import clsx from "clsx";
import Image from "next/image";

interface ProductCardImageProps {
  image: string;
  name: string;
  noMobileLayoutShift: boolean;
  discount_type: string;
  discount: number;
}

const ProductCardImage = ({
  image,
  name,
  noMobileLayoutShift,
  discount_type,
  discount,
}: ProductCardImageProps) => {
  const imagePath = getImagePath("product", image);
  const isPercentageDiscount = discount_type === "percent" && discount > 0;

  return (
    <figure
      className={clsx(
        "shrink-0 rounded-md relative overflow-hidden",
        noMobileLayoutShift
          ? "w-full aspect-3/2"
          : "w-[40%] md:w-full md:aspect-3/2"
      )}
      title={name}
    >
      <Image
        width={300}
        height={200}
        src={imagePath}
        alt={"Product Image"}
        className="size-full object-cover bg-gray-100 rounded-md"
      />

      {isPercentageDiscount && (
        <div className="absolute top-3 left-3 bg-primary/70 text-uiWhite text-xs font-medium px-2 py-1 rounded-md">
          {discount}% OFF
        </div>
      )}
    </figure>
  );
};

export default ProductCardImage;
