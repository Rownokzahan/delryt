"use client";

import ProfileHeaderDesktop from "./ProfileHeaderDesktop";
import ProfileMenuItem from "./ProfileMenuItem";
import { BiLogOut } from "react-icons/bi";
import { TbLockPassword, TbUser } from "react-icons/tb";
import ProfileLinkList from "./ProfileLinkList/ProfileLinkList";
import useModalById from "@/hooks/useModalById";

const ProfileSidebar = () => {
  const { openModal: openEditProfileModal } = useModalById("editProfileModal");
  const { openModal: openChangePasswordModal } = useModalById(
    "changePasswordModal"
  );
  const { openModal: openConfirmLogoutModal } =
    useModalById("confirmLogoutModal");

  return (
    <aside
      className="h-full overflow-y-auto col-span-4 border-e"
      style={{ scrollbarWidth: "thin" }}
    >
      <ProfileHeaderDesktop />

      <ProfileLinkList />

      <hr />

      <ProfileMenuItem
        onClick={openEditProfileModal}
        Icon={TbUser}
        label={"Edit Profile"}
      />

      <ProfileMenuItem
        onClick={openChangePasswordModal}
        Icon={TbLockPassword}
        label={"Change Password"}
      />

      <ProfileMenuItem
        onClick={openConfirmLogoutModal}
        Icon={BiLogOut}
        label={"Logout"}
      />
    </aside>
  );
};

export default ProfileSidebar;
