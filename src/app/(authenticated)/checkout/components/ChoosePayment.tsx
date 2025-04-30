import { GiWallet } from "react-icons/gi";

const ChoosePayment = () => {
  return (
    <div className="p-3 rounded-lg bg-uiWhite flex items-center gap-3 relative">
      <div className="size-8 rounded-full border border-primary/20 bg-primary/10 text-primary grid place-items-center">
        <GiWallet />
      </div>

      <div className="flex-1">
        <h3>Choose Payments</h3>
      </div>
    </div>
  );
};

export default ChoosePayment;
