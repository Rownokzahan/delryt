import { FaMapMarkerAlt } from "react-icons/fa";
import AddAddressButton from "@/components/ui/AddAddressButton";

const ChooseAddress = () => {
  return (
    <div className="p-3 rounded-lg bg-uiWhite flex gap-3 relative">
      <div className="size-8 rounded-full bg-primary grid place-items-center">
        <FaMapMarkerAlt className="text-white" />
      </div>

      <div className="flex-1 space-y-4">
        <h3 className="lg:text-xl font-medium">Choose Delivery Address</h3>
        <AddAddressButton />
      </div>

      <span className="h-5 border border-dashed border-s border-uiBlack-light/30 absolute top-full left-6" />
    </div>
  );
};

export default ChooseAddress;
