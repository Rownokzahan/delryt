import { Product, SelectedAddOnItem } from "@/types";
import React, { createContext, useContext, useEffect, useState } from "react";

interface CustomizationContextType {
  product: Product;
  totalPrice: number;
  selectedAddOns: SelectedAddOnItem[];
  setSelectedAddOns: React.Dispatch<React.SetStateAction<SelectedAddOnItem[]>>;
  resetCustomization: () => void;
}

const CustomizationContext = createContext<CustomizationContextType | null>(
  null
);

interface ProductCustomizationProviderProps {
  product: Product;
  prevSelectedAddOns: SelectedAddOnItem[];
  children: React.ReactNode;
}

const ProductCustomizationProvider = ({
  product,
  prevSelectedAddOns,
  children,
}: ProductCustomizationProviderProps) => {
  const [selectedAddOns, setSelectedAddOns] =
    useState<SelectedAddOnItem[]>(prevSelectedAddOns);
  const [totalPrice, setTotalPrice] = useState(0);

  const resetCustomization = () => {
    setSelectedAddOns([]);
  };

  useEffect(() => {
    let totalPrice = product.price ?? 0;

    if (product.add_ons) {
      for (const addOn of product.add_ons) {
        const selectedAddOn = selectedAddOns.find(
          (item) => item.id === addOn.id
        );

        if (selectedAddOn) {
          totalPrice += addOn.price * selectedAddOn.quantity;
        }
      }
    }

    setTotalPrice(totalPrice);
  }, [selectedAddOns, product]);

  return (
    <CustomizationContext.Provider
      value={{
        product,
        totalPrice,
        selectedAddOns,
        setSelectedAddOns,
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
