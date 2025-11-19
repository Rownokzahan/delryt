"use client";

import { User } from "@/types";
import { create } from "zustand";

type UserStore = {
  user: User | null;
  isLoading: boolean;

  actions: {
    setUser: (user: User | null) => void;
    setLoading: (loading: boolean) => void;
    clearUser: () => void;
  };
};

const useUserStore = create<UserStore>((set) => ({
  user: null,
  isLoading: true,

  actions: {
    setUser: (user) => set({ user, isLoading: false }),

    setLoading: (isLoading) => set({ isLoading }),

    clearUser: () => set({ user: null, isLoading: false }),
  },
}));

export const useUser = () => useUserStore((state) => state.user);
export const useIsUserLoading = () => useUserStore((state) => state.isLoading);

export const useUserActions = useUserStore((state) => state.actions);
