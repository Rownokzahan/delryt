export const getBeforeDiscountedPrice = (
  price: number,
  discount: number,
  discountType: "percent" | "amount" | string
): number => {
  if (discountType === "percent" && discount > 0) {
    return price + Math.ceil(price * (discount / 100));
  }

  if (discountType === "amount" && discount > 0) {
    return price + discount;
  }

  return 0;
};
