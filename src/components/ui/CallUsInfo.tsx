import { PiPhoneCall } from "react-icons/pi";

const CallUsInfo = () => {
  return (
    <div className="flex items-center gap-1">
      <PiPhoneCall className="text-xl text-primary" />

      <div className="grid text-sm text-uiBlack">
        <span>Call us at</span>
        <span className="font-semibold">+8801700000011</span>
      </div>
    </div>
  );
};

export default CallUsInfo;
