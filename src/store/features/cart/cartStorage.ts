import { LocalCartItem } from "@/types";

export const getCartStorageKey = () => {
  const branchId = localStorage.getItem("branch-id");
  return `cart-${branchId}`;
};

export const getStoredCart = (): LocalCartItem[] => {
  try {
    const data = localStorage.getItem(getCartStorageKey());
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error("Failed to get cart from storage", err);
    return [];
  }
};

export const storeCart = (cart: LocalCartItem[]) => {
  localStorage.setItem(getCartStorageKey(), JSON.stringify(cart));
};
