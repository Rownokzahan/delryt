import { Id, LocalCartItem, Product, SelectedAddOnItem } from "@/types";
import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { useMemo } from "react";
import { useCheckoutStore } from "./useCheckoutStore";
import toast from "react-hot-toast";

interface CartStore {
  cart: LocalCartItem[];
  actions: {
    addSimpleProduct: (product: Product) => void;

    addCustomizedProduct: (params: {
      product: Product;
      totalPrice: number;
      selectedAddOns: SelectedAddOnItem[];
    }) => void;

    removeLastCustomizedProduct: (productId: Id) => void;

    updateCartItemQuantity: (params: {
      id: Id;
      idType: "cartItemId" | "productId";
      action: "increment" | "decrement";
    }) => void;

    updateCartItemAddOns: (params: {
      cartId: Id;
      totalPrice: number;
      selectedAddOns: SelectedAddOnItem[];
    }) => void;

    clearCart: () => void;
  };
}

const useCartStore = create<CartStore>((set) => ({
  cart: [],
  actions: {
    addSimpleProduct: (product) =>
      set((state) => {
        const newCartItem: LocalCartItem = {
          id: uuidv4(), // Generate unique ID
          productId: product.id,
          price: product.price,
          discounted_price: 0,
          tax_amount: 0,
          quantity: 1,
          variant: [],
          variations: [],
          selectedAddOns: [],
          product,
        };

        const updatedCart = [...state.cart, newCartItem];
        return { cart: updatedCart };
      }),

    addCustomizedProduct: ({ product, totalPrice, selectedAddOns }) =>
      set((state) => {
        const newCartItem: LocalCartItem = {
          id: uuidv4(), // Generate unique ID
          productId: product.id,
          price: totalPrice,
          discounted_price: 0,
          tax_amount: 0,
          quantity: 1,
          variant: [],
          variations: [],
          selectedAddOns,
          product,
        };

        const updatedCart = [...state.cart, newCartItem];
        return { cart: updatedCart };
      }),

    removeLastCustomizedProduct: (productId) =>
      set((state) => {
        const lastItem = state.cart
          .filter((item) => item.productId === productId)
          .at(-1);

        if (!lastItem) {
          return { cart: state.cart };
        }

        const updatedCart = state.cart.filter(
          (item) => item.id !== lastItem.id
        );

        return { cart: updatedCart };
      }),

    updateCartItemQuantity: ({ id, idType, action }) => {
      set((state) => {
        const isMatch = (item: LocalCartItem) => {
          return idType === "cartItemId"
            ? item.id === id
            : item.productId === id;
        };

        const target = state.cart.find(isMatch);
        if (!target) {
          return { cart: state.cart };
        }

        let updatedCart: LocalCartItem[];

        if (action === "increment") {
          updatedCart = state.cart.map((item) =>
            isMatch(item) ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          // decrement
          if (target.quantity === 1) {
            updatedCart = state.cart.filter((item) => !isMatch(item));
          } else {
            updatedCart = state.cart.map((item) =>
              isMatch(item) ? { ...item, quantity: item.quantity - 1 } : item
            );
          }
        }

        return { cart: updatedCart };
      });

      // Remove if any coupon has applied
      const appliedCoupon = useCheckoutStore.getState().appliedCoupon;
      if (appliedCoupon.coupon !== null) {
        useCheckoutStore.getState().actions.removeCoupon();
        toast("Coupon removed due to cart changes", { icon: "⚠️" });
      }
    },

    updateCartItemAddOns: ({ cartId, totalPrice, selectedAddOns }) => {
      set((state) => {
        const updatedCart = state.cart.map((item) =>
          item.id === cartId
            ? { ...item, price: totalPrice, selectedAddOns }
            : item
        );
        return { cart: updatedCart };
      });

      // Remove if any coupon has applied
      const appliedCoupon = useCheckoutStore.getState().appliedCoupon;
      if (appliedCoupon.coupon !== null) {
        useCheckoutStore.getState().actions.removeCoupon();
        toast("Coupon removed due to cart changes", { icon: "⚠️" });
      }
    },

    clearCart: () =>
      set(() => {
        return { cart: [] };
      }),
  },
}));

export const useCart = () => {
  const cart = useCartStore((state) => state.cart);

  const cartTotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );

  return { cart, cartTotal };
};

export const useCartActions = () => useCartStore((state) => state.actions);
