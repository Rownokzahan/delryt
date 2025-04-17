import { User } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CurrentUserState {
  user: User | null;
  isLoading: boolean;
}

const initialState: CurrentUserState = {
  user: null,
  isLoading: true,
};

const userSlice = createSlice({
  name: "currentUser",
  initialState: initialState,
  reducers: {
    initializeCurrentUser: (state, { payload }: PayloadAction<User | null>) => {
      state.user = payload;
      state.isLoading = false;
    },

    updateCurrentUser: (state, { payload }: PayloadAction<User>) => {
      state.user = payload;
    },

    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { initializeCurrentUser, updateCurrentUser, clearUser } =
  userSlice.actions;
export default userSlice.reducer;
