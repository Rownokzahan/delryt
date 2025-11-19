import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import clsx from "clsx";
import { rubik } from "@/fonts/fonts";
import StoreProvider from "@/providers/StoreProvider";
import SearchModal from "@/modals/SearchModal";
import AuthModal from "@/modals/AuthModal";
import ShareModal from "@/modals/ShareModal";
import AddAddressModal from "@/modals/AddAddressModal";
import MenuSidebar from "@/components/MenuSidebar";
import ProductCustomizationModal from "@/modals/ProductCustomizationModal";
import UpdateAddressModal from "@/modals/UpdateAddressModal";
import { Toaster } from "react-hot-toast";
import ChangePasswordModal from "@/modals/ChangePasswordModal";
import ConfirmLogoutModal from "@/modals/ConfirmLogoutModal";
import DeliveryTimeSelectionModal from "@/modals/DeliveryTimeSelectionModal";
import ConfirmBranchSwitchModal from "@/modals/ConfirmBranchSwitchModal";
import { getCurrentUser } from "@/lib/auth";
import { cookies } from "next/headers";
import { BRANCH_ID_KEY } from "@/constants/cookies";

export const metadata = {
  title: "Delryt",
  description: "Food delivery app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser();

  console.log(user);

  return (
    <html lang="en">
      <body
        className={clsx(rubik.className, "antialiased bg-uiWhite text-uiBlack")}
      >
        <StoreProvider>
          {children}

          {/* Modals */}
          <AuthModal />
          <ConfirmLogoutModal />
          <SearchModal />
          <ShareModal />
          <DeliveryTimeSelectionModal />
          <ProductCustomizationModal />
          <AddAddressModal />
          <UpdateAddressModal />
          <ChangePasswordModal />
          <ConfirmBranchSwitchModal />

          {/* Menu Sidebar */}
          <MenuSidebar />
        </StoreProvider>

        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
