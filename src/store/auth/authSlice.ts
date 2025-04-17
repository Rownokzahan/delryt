import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    returnToPath: "/",
  },
  reducers: {
    setReturnToPath(state, action: PayloadAction<string>) {
      state.returnToPath = action.payload;
    },
    clearReturnToPath(state) {
      state.returnToPath = "/";
    },
  },
});

export const { setReturnToPath, clearReturnToPath } = authSlice.actions;

export default authSlice.reducer;
