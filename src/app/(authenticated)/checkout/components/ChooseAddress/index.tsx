import { FaMapMarkerAlt } from "react-icons/fa";
import AddressInfo from "./AddressInfo";

const ChooseAddress = () => {
  return (
    <div className="p-3 rounded-lg bg-uiWhite flex gap-3 relative">
      <div className="shrink-0 size-8 rounded-full border border-primary/20 bg-primary/10 text-primary grid place-items-center">
        <FaMapMarkerAlt />
      </div>

      <div className="min-w-0 flex-1 relative">
        <AddressInfo />
      </div>

      {/* Bottom Connector Line */}
      <span className="h-5 border border-dashed border-s border-uiBlack-light/30 absolute top-full left-6" />
    </div>
  );
};

export default ChooseAddress;
