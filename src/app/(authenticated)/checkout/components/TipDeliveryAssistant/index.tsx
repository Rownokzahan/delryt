import Image from "next/image";
import { MdInfoOutline } from "react-icons/md";
import TipSelection from "./TipSelection";

const TipDeliveryAssistant = () => {
  return (
    <div className="rounded-lg bg-uiWhite">
      <div className="p-3 pt-4">
        <div className="flex gap-2">
          <div className="space-y-2">
            <div className="flex justify-between gap-1">
              <h3 className="text-sm font-medium">
                Tip your delivery assistant
              </h3>
              <MdInfoOutline className="text-primary" />
            </div>

            <p className="text-xs text-uiBlack-light">
              Thank for their effort, your tip makes a BIG difference!
            </p>
          </div>

          <Image
            width={107}
            height={60}
            src="https://product-assets.faasos.io/eatsure_cms/production/8f4c634e-ed4d-46f5-9769-56be381a54c8.png"
            alt=""
            className="w-28 object-contain"
          />
        </div>

        <TipSelection />
      </div>

      <div className="px-3 py-1 rounded-b-lg bg-tertiary/30">
        <p className="text-xs text-center">
          100% of your tip will go to the delivery assistant.
        </p>
      </div>
    </div>
  );
};

export default TipDeliveryAssistant;
