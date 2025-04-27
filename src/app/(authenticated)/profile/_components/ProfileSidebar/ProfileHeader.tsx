"use client";

import useModalById from "@/hooks/useModalById";
import useUser from "@/hooks/useUser";
import { FaCircleUser } from "react-icons/fa6";

const ProfileHeader = () => {
  const { openModal } = useModalById("editProfileModal");
  const { user } = useUser();
  const { f_name, l_name, phone } = user || {};

  const handleProfileEdit = () => {
    openModal();
  };

  return (
    <div className="p-5 flex items-center gap-2">
      <FaCircleUser className="shrink-0 text-gray-300 text-6xl" />
      <div className="min-w-0">
        <h3 className="text-xl font-medium truncate">
          {f_name} {l_name}
        </h3>
        <p className="text-uiBlack-light text-sm">{phone}</p>

        <button onClick={handleProfileEdit} className="text-primary">
          Edit profile
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;
