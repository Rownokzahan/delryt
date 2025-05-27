"use client";

import useModalById from "@/hooks/useModalById";
import useUser from "@/hooks/useUser";
import Link from "next/link";
import { FaCircleUser } from "react-icons/fa6";

const ProfileOrSignInButton = () => {
  const { openModal: openAuthModal } = useModalById("authModal");
  const { user } = useUser();

  const baseClassName =
    "px-3 py-2 border-x border-primary/10 flex flex-row items-center gap-2";

  if (user) {
    return (
      <Link href="/profile" className={baseClassName}>
        <FaCircleUser className="text-3xl text-gray-300" />
        <span className="text-sm font-semibold">{user.f_name}</span>
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={openAuthModal}
      className={baseClassName}
      aria-label="Sign In"
    >
      <FaCircleUser className="text-3xl text-gray-300" />
      <span className="text-sm font-semibold">Sign In</span>
    </button>
  );
};

export default ProfileOrSignInButton;
