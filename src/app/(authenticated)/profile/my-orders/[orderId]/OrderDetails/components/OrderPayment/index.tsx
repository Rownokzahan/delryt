import { RiWallet3Fill } from "react-icons/ri";

const OrderPayment = () => {
  return (
    <div className="p-4 bg-uiWhite rounded-md">
      <h3 className="font-medium">Payment</h3>
      <div className="mt-1 flex items-center gap-1">
        <RiWallet3Fill className="text-xl" />
        <p className="text-sm">Cash On Delivery</p>
      </div>
    </div>
  );
};

export default OrderPayment;