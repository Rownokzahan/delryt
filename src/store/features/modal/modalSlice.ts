import { ModalData, ModalDataMap, ModalId } from "@/types/modal";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Modal state structure: modal ID as K, containing visibility and optional data.
type ModalState = {
  [K in ModalId]?: {
    isOpen: boolean; // Indicates if the modal is open.
    data: ModalData<K>; // Optional data for the modal.
  };
};

// Initial state: no modals open at the start.
const initialState: ModalState = {};

const modalSlice = createSlice({
  name: "modalStatus",
  initialState,
  reducers: {
    // Opens a modal with optional data.
    openModalById: <T extends ModalId>(
      state: ModalState,
      action: PayloadAction<{
        modalId: T;
        data: ModalDataMap[T];
      }>
    ) => {
      const { modalId, data } = action.payload;
      state[modalId] = {
        isOpen: true,
        data,
      } as ModalState[T];
    },

    // Closes the modal by removing it from state.
    closeModalById: (state, action: PayloadAction<ModalId>) => {
      delete state[action.payload]; // Remove modal from state (closes it).
    },
  },
});

export const { openModalById, closeModalById } = modalSlice.actions;
export default modalSlice.reducer;
