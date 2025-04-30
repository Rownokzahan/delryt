"use client";

import useCheckoutStates from "@/hooks/useCheckoutStates";
import { createContext, useContext, useEffect, useState } from "react";

interface SelectedTimeDateContextType {
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
  selectedTime: string;
  setSelectedTime: React.Dispatch<React.SetStateAction<string>>;
}

const SelectedTimeDateContext =
  createContext<SelectedTimeDateContextType | null>(null);

interface SelectedTimeDateProviderProps {
  children: React.ReactNode;
}

const SelectedTimeDateProvider = ({
  children,
}: SelectedTimeDateProviderProps) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("now");
  const { deliveryTime } = useCheckoutStates();;

  useEffect(() => {
    setSelectedDate(new Date(deliveryTime.date));
    setSelectedTime(deliveryTime.time);
  }, [deliveryTime]);

  return (
    <SelectedTimeDateContext.Provider
      value={{ selectedDate, setSelectedDate, selectedTime, setSelectedTime }}
    >
      {children}
    </SelectedTimeDateContext.Provider>
  );
};

export default SelectedTimeDateProvider;

export const useSelectedTimeDate = () => {
  const context = useContext(SelectedTimeDateContext);

  if (!context)
    throw new Error(
      "useSelectedTimeDate must be used within a SelectedTimeDateProvider"
    );

  return context;
};
