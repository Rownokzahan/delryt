import { GiKnifeFork } from "react-icons/gi";

const OrderDetailsNotFound = () => {
  return (
    <div className="absolute inset-0 bg-uiWhite grid h-[calc(100dvh-52px)] sm:h-auto">
      <div className="place-self-center">
        <GiKnifeFork className="mx-auto mb-4 text-5xl text-primary" />
        <h3 className="text-lg mb-8 text-center">Order details not found!</h3>
      </div>
    </div>
  );
};

export default OrderDetailsNotFound;
