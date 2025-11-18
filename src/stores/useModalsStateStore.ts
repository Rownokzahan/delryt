import { ModalId, ModalsState } from "@/types/modal";
import { create } from "zustand";

type State = ModalsState;

interface Actions {
  openModalById: <T extends ModalId>(
    modalId: T,
    data: ModalsState[T]["data"]
  ) => void;
  closeModalById: (modalId: ModalId) => void;
}

const initialState: State = {
  addAddressModal: { isOpen: false, data: null },
  authModal: { isOpen: false, data: null },
  changePasswordModal: { isOpen: false, data: null },
  chooseAddressModal: { isOpen: false, data: null },
  couponsModal: { isOpen: false, data: null },
  couponCodeModal: { isOpen: false, data: null },
  dateSortModal: { isOpen: false, data: null },
  deliveryTimeSelectionModal: { isOpen: false, data: null },
  editProfileModal: { isOpen: false, data: null },
  menuModal: { isOpen: false, data: null },
  searchModal: { isOpen: false, data: null },
  shareModal: { isOpen: false, data: null },
  sortModal: { isOpen: false, data: null },
  confirmLogoutModal: { isOpen: false, data: null },
  menuSidebar: { isOpen: false, data: null },

  confirmBranchSwitchModal: { isOpen: false, data: undefined! },
  updateAddressModal: { isOpen: false, data: undefined! },
  productCustomizationModal: { isOpen: false, data: undefined! },
};

export const useModalsStateStore = create<State & { actions: Actions }>(
  (set) => ({
    ...initialState,

    actions: {
      openModalById: (modalId, data = null) =>
        set((state) => ({
          ...state,
          [modalId]: { isOpen: open, data },
        })),

      closeModalById: (modalId) =>
        set((state) => ({
          ...state,
          [modalId]: initialState[modalId],
        })),
    },
  })
);
