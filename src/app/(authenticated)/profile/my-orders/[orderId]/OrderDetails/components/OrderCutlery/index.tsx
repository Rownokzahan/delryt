import { Order } from "@/types";

interface OrderCutleryProps {
  order: Order;
}

const OrderCutlery = ({ order }: OrderCutleryProps) => {
  const { is_cutlery_required } = order || {};

  return (
    <div className="p-4 bg-uiWhite rounded-md flex items-center justify-between gap-4">
      <h3 className="font-medium">Cutlery</h3>
      <p className="text-sm">{is_cutlery_required ? "Yes" : "No"}</p>
    </div>
  );
};

export default OrderCutlery;
