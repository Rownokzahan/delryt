import {
  resetDeliveryTime,
  setDeliveryTime,
} from "@/store/features/deliveryTime/deliveryTimeSlice";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

const useDeliveryTime = () => {
  const dispatch = useDispatch();
  const deliveryTime = useSelector((state: RootState) => state.deliveryTime);

  const updateDeliveryTime = (time: string) => {
    dispatch(setDeliveryTime(time));
  };

  const resetDeliveryTimeToNow = () => {
    dispatch(resetDeliveryTime());
  };

  return { deliveryTime, updateDeliveryTime, resetDeliveryTimeToNow };
};

export default useDeliveryTime;
