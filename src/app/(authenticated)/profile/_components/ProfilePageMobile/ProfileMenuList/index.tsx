"use client";

import useModalById from "@/hooks/useModalById";
import { ModalId } from "@/types/modal";
import ProfileMenuItemMobile from "./ProfileMenuItemMobile";

const menuItems = [
  { label: "My Orders", href: "/profile/my-orders" },
  { label: "Manage Addresses", href: "/profile/manage-address" },
  { label: "Wallet Transactions", href: "/profile/wallet" },
  { label: "Sure Points", href: "/profile/sure-points" },
];

const actionItems: { label: string; modalId: ModalId }[] = [
  { label: "Edit Profile", modalId: "editProfileModal" },
  { label: "Change Password", modalId: "changePasswordModal" },
  { label: "Logout", modalId: "confirmLogoutModal" },
];

const ProfileMenuList = () => {
  const modals = {
    editProfileModal: useModalById("editProfileModal").openModal,
    changePasswordModal: useModalById("changePasswordModal").openModal,
    confirmLogoutModal: useModalById("confirmLogoutModal").openModal,
  };

  const handleModalOpen = (modalId: ModalId) => {
    const modalFn = modals[modalId as keyof typeof modals];
    if (modalFn) {
      modalFn();
    }
  };

  return (
    <div className="mt-3 space-y-3 text-uiBlack-light">
      <div className="px-3 rounded-md bg-uiWhite divide-y">
        {menuItems.map((item) => (
          <ProfileMenuItemMobile
            key={item.label}
            label={item.label}
            href={item.href}
          />
        ))}
      </div>

      <div className="px-3 rounded-md bg-uiWhite divide-y">
        {actionItems.map(({ label, modalId }) => (
          <ProfileMenuItemMobile
            key={label}
            label={label}
            onClick={() => handleModalOpen(modalId)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileMenuList;
