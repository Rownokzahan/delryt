import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const useUser = () => {
  const user = useSelector((state: RootState) => state.user);

  return {
    user,
  };
};

export default useUser;
