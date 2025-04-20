import { ModalId } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  [key: ModalId]: boolean;
}

const initialState: ModalState = {};

const modalSlice = createSlice({
  name: "modalStatus",
  initialState,
  reducers: {
    // Opens the specified modal by setting its state to true.
    openModalById: (state, action: PayloadAction<ModalId>) => {
      state[action.payload] = true;
    },

    // Closes the modal by removing its state key.
    closeModalById: (state, action: PayloadAction<ModalId>) => {
      delete state[action.payload];
    },
  },
});

export const { openModalById, closeModalById } = modalSlice.actions;
export default modalSlice.reducer;
