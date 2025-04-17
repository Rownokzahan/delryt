import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const useUser = () => {
  const { isLoading, user } = useSelector((state: RootState) => state.user);

  return {
    isLoading,
    user,
  };
};

export default useUser;
