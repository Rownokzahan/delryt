import { Order } from "@/types";
import { RiMapPinLine, RiMapPinUserLine } from "react-icons/ri";

interface OrderDeliveryProps {
  order: Order;
}

const OrderDelivery = ({ order }: OrderDeliveryProps) => {
  const { branch, delivery_address } = order || {};

  return (
    <div className="p-4 bg-uiWhite rounded-md">
      <h3 className="font-medium">Delivery</h3>
      <div className="text-sm divide-y">
        <div className="py-1 flex gap-1">
          <RiMapPinLine className="mt-[2px] text-lg" />
          <div>
            <p>From</p>
            <p>{branch?.name}</p>
          </div>
        </div>

        <div className="pt-2 flex gap-1">
          <RiMapPinUserLine className="mt-[2px] text-lg" />
          <div>
            <p>To</p>
            <p>{delivery_address?.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDelivery;
