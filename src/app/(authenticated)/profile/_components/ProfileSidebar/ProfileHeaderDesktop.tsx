"use client";

import useUser from "@/hooks/useUser";
import { FaCircleUser } from "react-icons/fa6";

const ProfileHeaderDesktop = () => {
  const { user } = useUser();
  const { f_name, l_name, phone } = user || {};

  return (
    <div className="px-5 pt-6 pb-4">
      <FaCircleUser className="mx-auto mb-1 shrink-0 text-gray-300 text-6xl" />
      <div className="text-center">
        <h3 className="text-lg font-medium truncate">
          {f_name} {l_name}
        </h3>
        <p className="text-uiBlack-light text-sm">{phone}</p>
      </div>
    </div>
  );
};

export default ProfileHeaderDesktop;
