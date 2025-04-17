import {
  clearReturnToPath as clearReturnToPathAction,
  setReturnToPath as setReturnToPathAction,
} from "@/store/auth/authSlice";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

const useReturnToPath = () => {
  const returnToPath = useSelector(
    (state: RootState) => state.auth.returnToPath
  );
  const dispatch = useDispatch();

  const setReturnToPath = (path: string) => {
    dispatch(setReturnToPathAction(path));
  };

  const clearReturnToPath = () => {
    dispatch(clearReturnToPathAction());
  };

  return {
    returnToPath,
    setReturnToPath,
    clearReturnToPath,
  };
};

export default useReturnToPath;
