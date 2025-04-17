"use client";

import useModalById from "@/hooks/useModalById";
import { FaCircleUser } from "react-icons/fa6";

const ProfileHeader = () => {
  const { openModal } = useModalById("editProfileModal");

  return (
    <div className="p-5 flex items-center gap-2">
      <FaCircleUser className="shrink-0 text-gray-300 text-6xl" />
      <div className="min-w-0">
        <h3 className="text-xl font-medium truncate">Rownok Zahan</h3>
        <p className="text-uiBlack-light text-sm">+8801750057406</p>

        <button onClick={openModal} className="text-primary">
          Edit profile
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;
