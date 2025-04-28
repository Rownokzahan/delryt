import { MdDeliveryDining } from "react-icons/md";

const DeliveryTimeSelectionHeader = () => {
  return (
    <header className="p-4 rounded-t-xl bg-primary/20 sm:bg-uiWhite">
      {/* Delivery icon for small screens */}
      <div className="sm:hidden p-1 rounded-full absolute top-4 left-1/2 -translate-x-1/2 bg-[#f4cece]">
        <div className="size-8 bg-linear-to-b rounded-full from-primary/60 to-primary/80 text-uiWhite flex items-center justify-center">
          <MdDeliveryDining className="text-xl" />
        </div>
      </div>

      {/* Title and subtitle */}
      <div className="mt-2 text-center">
        <h3 className="text-lg font-medium">Change Delivery Date & Time</h3>
        <p className="sm:mt-1 text-sm text-uiBlack-light">
          Order in advance and beat the rush!
        </p>
      </div>
    </header>
  );
};

export default DeliveryTimeSelectionHeader;
