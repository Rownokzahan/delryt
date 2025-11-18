import { Address, Branch, Id, Product, SelectedAddOnItem } from "@/types";

type ModalState<T = null> = {
  isOpen: boolean;
  data: T;
};

export type ModalsState = {
  addAddressModal: ModalState;
  authModal: ModalState;
  changePasswordModal: ModalState;
  chooseAddressModal: ModalState;
  couponsModal: ModalState;
  couponCodeModal: ModalState;
  dateSortModal: ModalState;
  deliveryTimeSelectionModal: ModalState;
  editProfileModal: ModalState;
  menuModal: ModalState;
  searchModal: ModalState;
  shareModal: ModalState;
  sortModal: ModalState;
  confirmLogoutModal: ModalState;
  menuSidebar: ModalState;

  confirmBranchSwitchModal: ModalState<Branch>;
  updateAddressModal: ModalState<Address>;
  productCustomizationModal: ModalState<
    | {
        mode: "add";
        product: Product;
      }
    | {
        mode: "edit";
        product: Product;
        selectedAddOns: SelectedAddOnItem[];
        cartId: Id;
      }
  >;
};

export type ModalId = keyof ModalsState;
