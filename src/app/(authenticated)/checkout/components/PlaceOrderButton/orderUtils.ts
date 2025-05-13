import { LocalCartItem, OrderCartItem } from "@/types";

export const localCartToOrderCart = (
  cart: LocalCartItem[]
): OrderCartItem[] => {
  return cart.map((item) => {
    const addOnIds = item.selectedAddOns?.map((addon) => addon.id);
    const addOnQuantities = item.selectedAddOns?.map((addon) => addon.quantity);

    const cartItem: OrderCartItem = {
      productId: item.productId,
      quantity: item.quantity,
      price: item.price,
      discounted_price: item.discounted_price,
      tax_amount: item.tax_amount,
      variation: item.variation,
      add_on_ids: addOnIds,
      add_on_qtys: addOnQuantities,
    };

    return cartItem;
  });
};

const convertTo24Hour = (time12h: string): string => {
  const [time, modifier] = time12h.trim().split(" ");
  const [rawHours, minutes] = time.split(":").map(Number);
  let hours = rawHours;

  if (modifier.toLowerCase() === "pm" && hours < 12) hours += 12;
  if (modifier.toLowerCase() === "am" && hours === 12) hours = 0;

  const formattedTime = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}`;

  return formattedTime;
};

export const formatDeliveryTime = (time: string): string => {
  return time === "now" ? "now" : convertTo24Hour(time.split(" - ")[0]);
};

export const formatDeliveryDate = (date: string): string => {
  return new Date(date).toLocaleDateString("en-CA");
};
