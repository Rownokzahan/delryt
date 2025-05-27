"use client";

import useUser from "@/hooks/useUser";
import { FaCircleUser } from "react-icons/fa6";

const ProfileHeaderMobile = () => {
  const { user } = useUser();
  const { f_name, l_name, phone } = user || {};

  return (
    <div className="rounded-md bg-uiWhite">
      <div className="px-2 py-4 rounded-md bg-primary/90 text-uiWhite">
        <div className="size-max mx-auto mb-2 bg-uiWhite rounded-full">
          <FaCircleUser className="text-5xl text-gray-200" />
        </div>

        <div className="text-center">
          <h3 className="text-lg font-medium truncate">
            Hi, {f_name} {l_name}
          </h3>
          <p className="text-sm">{phone}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeaderMobile;
