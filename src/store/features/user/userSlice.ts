import { User } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CurrentUserState {
  user: User | null;
  isLoading: boolean;
}

const initialState: CurrentUserState = {
  user: null,
  isLoading: false,
};

const userSlice = createSlice({
  name: "currentUser",
  initialState: initialState,
  reducers: {
    setCurrentUserLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload;
    },

    setCurrentUser: (state, { payload }: PayloadAction<User | null>) => {
      state.user = payload;
    },

    clearUser: () => initialState,
  },
});

export const { setCurrentUserLoading, setCurrentUser, clearUser } =
  userSlice.actions;

export default userSlice.reducer;
