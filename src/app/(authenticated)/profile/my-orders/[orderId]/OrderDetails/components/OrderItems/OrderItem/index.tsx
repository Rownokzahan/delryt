import VegNonVegIcon from "@/components/ui/VegNonVegIcon";
import { OrderItemType } from "@/types";
import { getImagePath } from "@/utils/imageHelper";
import Image from "next/image";

interface OrderItemProps {
  orderItem: OrderItemType;
}

const OrderItem = ({ orderItem }: OrderItemProps) => {
  const { price, quantity } = orderItem || {};
  const { name, image, product_type } = orderItem?.product_details || {};

  return (
    <div className="py-3 flex gap-3">
      <Image
        width={300}
        height={200}
        src={getImagePath("product", image)}
        alt={"Product Image"}
        className="size-12 object-cover bg-gray-100"
      />

      <div className="min-w-0 flex-1">
        <p className="truncate">
          <VegNonVegIcon
            isVeg={product_type === "veg" ? true : false}
            className="float-left size-3! mt-1.5 me-1"
          />
          <span className="text-sm">{name}</span>
        </p>

        <div className="mt-1 flex items-center justify-between gap-4">
          <p className="text-sm">৳{price}</p>
        </div>
      </div>

      <p className="shrink-0 mt-1 text-xs text-uiBlack-light">
        Qty: {quantity}
      </p>
    </div>
  );
};

export default OrderItem;
