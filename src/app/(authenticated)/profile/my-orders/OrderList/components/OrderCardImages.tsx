import { getImagePath } from "@/utils/imageHelper";
import clsx from "clsx";
import Image from "next/image";

interface OrderCardImagesProps {
  images:string[];
}

const OrderCardImages = ({ images }: OrderCardImagesProps) => {
  return (
    <div
      className={clsx("place-self-start size-16 grid gap-px", {
        "grid-cols-1 grid-rows-1": images.length === 1,
        "grid-cols-1 grid-rows-2": images.length === 2,
        "grid-cols-2 grid-rows-2": images.length >= 3,
      })}
    >
      {images.slice(0, 4).map((img, index) => (
        <figure key={index} className="size-full relative">
          <Image
            width={100}
            height={100}
            src={getImagePath("product", img)}
            alt={`Product image ${index + 1}`}
            className="size-full border rounded object-cover bg-gray-200"
          />

          {images.length > 4 && index === 3 && (
            <div className="absolute inset-0 size-full border rounded bg-black/40 grid place-items-center text-xs text-uiWhite/90">
              +{images.length - 3}
            </div>
          )}
        </figure>
      ))}
    </div>
  );
};

export default OrderCardImages;