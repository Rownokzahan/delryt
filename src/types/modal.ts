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
  menuModal: undefined;
  searchModal: undefined;
  shareModal: undefined;
  sortModal: undefined;
  confirmLogoutModal: undefined;

  confirmBranchSwitchModal: Branch;
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

  menuSidebar: undefined;
}

export type ModalId = keyof ModalDataMap;

export type ModalData<T extends ModalId> = ModalDataMap[T];
