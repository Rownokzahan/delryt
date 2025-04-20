import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import clsx from "clsx";
import { rubik } from "@/fonts/fonts";
import StoreProvider from "@/providers/StoreProvider";
import DeliverySlotModal from "@/modals/DeliverySlotModal";
import SearchModal from "@/modals/SearchModal";
import AuthModal from "@/modals/AuthModal";
import CustomizationModal from "@/modals/CustomizationModal";
import ShareModal from "@/modals/ShareModal";
import AddAddressModal from "@/modals/AddAddressModal";
import MenuSidebar from "@/components/MenuSidebar";

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
          <SearchModal />
          <ShareModal />
          <DeliverySlotModal />
          <CustomizationModal />
          <AddAddressModal />

          {/* My profile Sidebar */}
          <MenuSidebar />
        </StoreProvider>
      </body>
    </html>
  );
}
