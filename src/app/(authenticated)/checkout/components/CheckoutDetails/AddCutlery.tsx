import { PiForkKnifeBold } from "react-icons/pi";
import InfoCard from "./InfoCard";
import clsx from "clsx";
import useCheckoutState from "@/hooks/useCheckoutState";

const AddCutlery = () => {
  const { addCutlery, toggleAddCutlery } = useCheckoutState();

  return (
    <InfoCard
      Icon={PiForkKnifeBold}
      label="Add Cutlery"
      showArrowButton={false}
    >
      <div className="relative">
        <p>Do you need disposable cutlery?</p>

        {/* Toggle Button */}
        <button
          onClick={toggleAddCutlery}
          aria-pressed={addCutlery}
          aria-label="Toggle cutlery"
          className="absolute -top-5 sm:-top-4 right-0 focus:outline-none"
        >
          <div
            className={clsx(
              "w-8 h-4 rounded-full relative transition-colors duration-200",
              addCutlery ? "bg-primary" : "bg-gray-300"
            )}
          >
            <div
              className={clsx(
                "size-[17px] border border-gray-300 rounded-full shadow-md bg-white",
                "absolute top-1/2 -translate-y-1/2 transition-transform duration-200",
                addCutlery ? "translate-x-[17px]" : "-translate-x-[1px]"
              )}
            />
          </div>
        </button>
      </div>
    </InfoCard>
  );
};

export default AddCutlery;
