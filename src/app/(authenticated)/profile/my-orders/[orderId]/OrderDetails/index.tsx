"use client";

import { useGetOrderByIdQuery } from "@/store/features/orders/ordersApi";
import { Id } from "@/types";
import OrderItems from "./OrderItems";

interface OrderDetails {
  orderId: Id;
}

const OrderDetails = ({ orderId }: OrderDetails) => {
  const { data: order } = useGetOrderByIdQuery(orderId);

  return (
    <div>
      <div className="p-4 bg-uiBlack/10 space-y-4">
        <div className="p-4 bg-uiWhite rounded-md flex justify-between items-center">
          <h3 className="font-medium">Order#{orderId}</h3>

          <p className="text-sm text-uiBlack-light">{order?.delivery_date}</p>
        </div>

        <div className="p-4 bg-uiWhite rounded-md">
          <h3 className="sm:text-lg font-medium">Ordered Items</h3>
          <OrderItems orderId={orderId} />
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
