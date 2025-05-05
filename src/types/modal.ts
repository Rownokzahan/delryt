import { Address } from ".";

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
  productCustomizationModal: undefined;
  searchModal: undefined;
  shareModal: undefined;
  sortModal: undefined;

  updateAddressModal: Address;
}

export type ModalId = keyof ModalDataMap;

export type ModalData<T extends ModalId> = ModalDataMap[T];
