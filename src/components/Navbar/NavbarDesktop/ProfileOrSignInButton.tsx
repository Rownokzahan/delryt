import useModalById from "@/hooks/useModalById";
import useReturnToPath from "@/hooks/useReturnToPath";
import useUser from "@/hooks/useUser";
import Link from "next/link";
import { FaCircleUser } from "react-icons/fa6";

const ProfileOrSignInButton = () => {
  const { openModal: openAuthModal } = useModalById("authModal");
  const { user } = useUser();
  const { setReturnToPath } = useReturnToPath();

  const handleSignInClick = () => {
    setReturnToPath("/profile");
    openAuthModal();
  };

  const baseClassName =
    "px-3 py-2 border-x border-primary/10 flex flex-row items-center gap-2";

  return user ? (
    <Link href="/profile" className={baseClassName}>
      <FaCircleUser className="text-3xl text-gray-300" />
      <span className="text-sm font-semibold">{user.f_name}</span>
    </Link>
  ) : (
    <button
      type="button"
      onClick={handleSignInClick}
      className={baseClassName}
      aria-label="Sign In"
    >
      <FaCircleUser className="text-3xl text-gray-300" />
      <span className="text-sm font-semibold">Sign In</span>
    </button>
  );
};

export default ProfileOrSignInButton;
