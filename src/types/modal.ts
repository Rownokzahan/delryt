import { Address, Branch, Id, Product, SelectedAddOnItem } from ".";

export interface ModalDataMap {
  addAddressModal: undefined;
  authModal: undefined;
  changePasswordModal: undefined;
  chooseAddressModal: undefined;
  couponsModal: undefined;
  couponCodeModal: undefined;
  dateSortModal: undefined;
  deliveryTimeSelectionModal: undefined;
  editProfileModal: undefined;
  logoutConfirmModal: undefined;
  menuModal: undefined;
  searchModal: undefined;
  shareModal: undefined;
  sortModal: undefined;
  confirmBranchSwitchModal: Branch;
  menuSidebar: undefined;

  productCustomizationModal:
    | {
        mode: "add";
        product: Product;
      }
    | {
        mode: "edit";
        product: Product;
        selectedAddOns: SelectedAddOnItem[];
        cartId: Id;
      };

  updateAddressModal: Address;
}

export type ModalId = keyof ModalDataMap;

export type ModalData<T extends ModalId> = ModalDataMap[T];
