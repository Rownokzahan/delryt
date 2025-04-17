import { User } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = User | null;
const initialState = null as UserState;

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<User>) => payload,
    clearUser: () => null,
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
