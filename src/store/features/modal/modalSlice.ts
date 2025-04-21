import { ModalId } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Modal state structure: modal ID as key, containing visibility and optional data.
interface ModalState {
  [key: ModalId]: {
    isOpen: boolean; // Indicates if the modal is open.
    data?: unknown; // Optional data for the modal.
  };
}

// Initial state: no modals open at the start.
const initialState: ModalState = {};

const modalSlice = createSlice({
  name: "modalStatus",
  initialState,
  reducers: {
    // Opens a modal with optional data.
    openModalById: (
      state,
      action: PayloadAction<{ modalId: ModalId; data?: unknown }>
    ) => {
      const { modalId, data } = action.payload;
      state[modalId] = { isOpen: true, data }; // Set modal open and store data.
    },

    // Closes the modal by removing it from state.
    closeModalById: (state, action: PayloadAction<ModalId>) => {
      delete state[action.payload]; // Remove modal from state (closes it).
    },
  },
});

export const { openModalById, closeModalById } = modalSlice.actions;
export default modalSlice.reducer;
