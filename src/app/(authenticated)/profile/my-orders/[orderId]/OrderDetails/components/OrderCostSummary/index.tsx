import { Order } from "@/types";

interface OrderCostSummaryProps {
  order: Order;
}

const OrderCostSummary = ({ order }: OrderCostSummaryProps) => {
  const {
    order_amount,
    coupon_discount_amount,
    total_tax_amount,
    delivery_charge,
  } = order;

  const total =
    order_amount + total_tax_amount + delivery_charge - coupon_discount_amount;

  return (
    <div className="p-4 bg-uiWhite rounded-md">
      <h3 className="font-medium">Cost Summary</h3>
      <div className="mt-1 text-sm space-y-px">
        <div className="flex justify-between items-center">
          <p>Items Price</p>
          <p className="text-end">৳{order_amount}</p>
        </div>

        <div className="flex justify-between items-center">
          <p>Coupon Discount</p>
          <p className="text-end">- ৳{coupon_discount_amount}</p>
        </div>

        <div className="flex justify-between items-center">
          <p>Taxes & Charges</p>
          <p className="text-end">৳{total_tax_amount}</p>
        </div>

        <div className="flex justify-between items-center">
          <p>Delivery Fees</p>
          <p className="text-end">৳{delivery_charge}</p>
        </div>

        <div className="border-t pt-1 mt-1 text-primary flex justify-between items-center">
          <p>Total</p>
          <p className="text-end">৳{total}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderCostSummary;
