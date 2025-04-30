"use client";

import { Address } from "@/types";
import { createContext, useContext, useState } from "react";

interface CheckoutContextType {
  selectedAddress: Address | null;
  setSelectedAddress: React.Dispatch<React.SetStateAction<Address | null>>;
}

const CheckoutContext = createContext<CheckoutContextType | null>(null);

interface CheckoutProviderProps {
  children: React.ReactNode;
}

const CheckoutProvider = ({ children }: CheckoutProviderProps) => {
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);

  return (
    <CheckoutContext.Provider value={{ selectedAddress, setSelectedAddress }}>
      {children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutProvider;

export const useCheckoutProvider = () => {
  const context = useContext(CheckoutContext);

  if (!context)
    throw new Error(
      "useCheckoutProvider must be used within a CheckoutProvider"
    );

  return context;
};
