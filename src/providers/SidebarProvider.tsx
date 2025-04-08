"use client";

import { createContext, useState } from "react";

interface SidebarState {
  [key: string]: boolean;
}

interface SidebarContextType {
  sidebarStates: SidebarState;
  openSidebarById: (sidebarId: string) => void;
  closeSidebarById: (sidebarId: string) => void;
  isSidebarOpenById: (sidebarId: string) => boolean;
}

const defaultContextValue: SidebarContextType = {
  sidebarStates: {},
  openSidebarById: () => {},
  closeSidebarById: () => {},
  isSidebarOpenById: () => false,
};

export const SidebarContext =
  createContext<SidebarContextType>(defaultContextValue);

interface SidebarProviderProps {
  children: React.ReactNode;
}

const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [sidebarStates, setSidebarStates] = useState<SidebarState>({});

  const openSidebarById = (sidebarId: string) =>
    setSidebarStates((prev) => ({ ...prev, [sidebarId]: true }));

  const closeSidebarById = (sidebarId: string) =>
    setSidebarStates((prev) => ({ ...prev, [sidebarId]: false }));

  const isSidebarOpenById = (sidebarId: string) => !!sidebarStates[sidebarId];

  return (
    <SidebarContext.Provider
      value={{
        sidebarStates,
        openSidebarById,
        closeSidebarById,
        isSidebarOpenById,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
