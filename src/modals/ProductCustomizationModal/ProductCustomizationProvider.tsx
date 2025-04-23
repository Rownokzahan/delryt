import { useCart } from "@/hooks/useCart";
import { LocalCartItem, Id, Product } from "@/types";
import React, { createContext, useContext, useEffect, useState } from "react";

interface CustomizationContextType {
  product: Product;
  addProductToCart: () => void;
  totalPrice: number;
  selectedAddOnIds: Id[];
  toggleAddOn: (addOnId: Id) => void;
  resetCustomization: () => void;
}

const CustomizationContext = createContext<CustomizationContextType | null>(
  null
);

interface ProductCustomizationProviderProps {
  product: Product;
  children: React.ReactNode;
}

const ProductCustomizationProvider = ({
  product,
  children,
}: ProductCustomizationProviderProps) => {
  const [selectedAddOnIds, setSelectedAddOnIds] = useState<Id[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const { addToCart } = useCart();

  const addProductToCart = () => {
    const cartItem: LocalCartItem = {
      productId: product.id,
      price: totalPrice,
      discounted_price: 0,
      tax_amount: 0,
      quantity: 1,
      variation: [],
      selectedAddOns: selectedAddOnIds.map((id) => ({ id, quantity: 1 })),
      product,
    };

    addToCart(cartItem);
  };

  const toggleAddOn = (addOnId: Id) => {
    setSelectedAddOnIds((prev) => {
      if (prev.includes(addOnId)) {
        return prev.filter((id) => id !== addOnId);
      }
      return [...prev, addOnId];
    });
  };

  const resetCustomization = () => {
    setSelectedAddOnIds([]);
  };

  useEffect(() => {
    let totalPrice = product.price ?? 0;

    if (product.add_ons) {
      for (const addOn of product.add_ons) {
        if (selectedAddOnIds.includes(addOn.id)) {
          totalPrice += addOn.price;
        }
      }
    }

    setTotalPrice(totalPrice);
  }, [selectedAddOnIds, product]);

  return (
    <CustomizationContext.Provider
      value={{
        product,
        addProductToCart,
        totalPrice,
        selectedAddOnIds,
        toggleAddOn,
        resetCustomization,
      }}
    >
      {children}
    </CustomizationContext.Provider>
  );
};

export default ProductCustomizationProvider;

export const useProductCustomization = () => {
  const context = useContext(CustomizationContext);

  if (!context)
    throw new Error(
      "useProductCustomization must be used within a ProductCustomizationProvider"
    );

  return context;
};
