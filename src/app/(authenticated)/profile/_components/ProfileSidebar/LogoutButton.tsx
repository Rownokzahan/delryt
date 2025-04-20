import { IoChevronForwardOutline } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import { useLogoutMutation } from "@/store/features/auth/authApi";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const [logout] = useLogoutMutation();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full p-4 flex items-center justify-between"
    >
      <div className="flex items-center gap-2">
        <div className="size-8 rounded-full bg-gray-100 grid place-items-center">
          <BiLogOut className="text-lg text-uiBlack" />
        </div>
        <p>Logout</p>
      </div>

      <IoChevronForwardOutline />
    </button>
  );
};

export default LogoutButton;
