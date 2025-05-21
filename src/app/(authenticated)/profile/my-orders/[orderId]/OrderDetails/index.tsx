"use client";

import { Id } from "@/types";

interface OrderDetails {
  orderId: Id;
}

const OrderDetails = ({ orderId }: OrderDetails) => {
  return (
    <div>
      <h1>OrderDetails</h1>
    </div>
  );
};

export default OrderDetails;
