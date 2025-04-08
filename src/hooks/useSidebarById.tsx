import { SidebarContext } from "@/providers/SidebarProvider";
import { useContext } from "react";

const useSidebarById = (sidebarId: string) => {
  const { openSidebarById, closeSidebarById, isSidebarOpenById } =
    useContext(SidebarContext);

  return {
    openSidebar: () => openSidebarById(sidebarId),
    closeSidebar: () => closeSidebarById(sidebarId),
    isSidebarOpen: isSidebarOpenById(sidebarId),
  };
};

export default useSidebarById;
