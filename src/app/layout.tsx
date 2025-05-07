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
import LogoutConfirmModal from "@/modals/LogoutConfirmModal";
import DeliveryTimeSelectionModal from "@/modals/DeliveryTimeSelectionModal";
import ConfirmBranchSwitchModal from "@/modals/ConfirmBranchSwitchModal";

export const metadata = {
  title: "Delryt",
  description: "Food delivery app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(rubik.className, "antialiased bg-uiWhite text-uiBlack")}
      >
        <StoreProvider>
          {children}

          {/* Modals */}
          <AuthModal />
          <LogoutConfirmModal />
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
