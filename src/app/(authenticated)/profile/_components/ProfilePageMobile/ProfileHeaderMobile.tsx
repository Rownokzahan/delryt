"use client";

import useModalById from "@/hooks/useModalById";
import useUser from "@/hooks/useUser";
import { FaEdit } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";

const ProfileHeaderMobile = () => {
  const { openModalWithData } = useModalById("editProfileModal");
  const { user } = useUser();
  const { f_name, l_name, phone } = user || {};

  const handleProfileEdit = () => {
    openModalWithData({ user });
  };

  return (
    <div className="rounded-md bg-primary">
      <div className="px-2 py-4 rounded-md flex items-center gap-3 text-uiWhite">
        <div className="bg-uiWhite rounded-full">
          <FaCircleUser className="text-6xl text-gray-200" />
        </div>
        <div>
          <h3 className="text-lg font-medium truncate">
            Hi, {f_name} {l_name}
          </h3>
          <p className="mb-2 text-xs">{phone}</p>

          <button
            onClick={handleProfileEdit}
            className="text-uiWhite text-xs flex items-center gap-1"
          >
            <FaEdit />
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeaderMobile;
