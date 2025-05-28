import { Product } from "@/types";

/**
 * Calculates the original price of a product before discount.
 * Returns the total by reversing percent or amount-based discount.
 */
export const getBeforeDiscountedProductPrice = (product: Product) => {
  const { discount_type, discount, price } = product || {};

  if (discount_type === "percent" && discount > 0) {
    return price + Math.ceil(price * (discount / 100));
  }

  if (discount_type === "amount" && discount > 0) {
    return price + discount;
  }

  return 0;
};

// Determines if a product is out of stock.
export const isProductOutOfStock = (product: Product): boolean => {
  const { stock_type, stock, sold_quantity } = product?.branch_product || {};

  if (stock_type === "unlimited") {
    return false;
  }

  return sold_quantity >= stock;
};

/**
 * Returns the average rating of a product rounded to one decimal.
 * Returns null if no rating is available or if invalid.
 */
export const getProductAverageRating = (product: Product): number | null => {
  const { rating = [] } = product || {};

  if (rating.length === 0 || !rating[0].average) {
    return null;
  }

  const rawAverage = parseFloat(rating[0].average);

  if (isNaN(rawAverage)) {
    return null;
  }

  return parseFloat(rawAverage.toFixed(1));
};

export const isAvailable = (startTime: string, endTime: string) => {
  const now = new Date();
  const [sh, sm, ss] = startTime.split(":").map(Number);
  const [eh, em, es] = endTime.split(":").map(Number);

  const start = new Date(now);
  start.setHours(sh, sm, ss, 0);

  console.log(sh, sm, ss, eh, em, es, startTime, endTime);

  const end = new Date(now);
  end.setHours(eh, em, es, 0);

  if (start <= end) {
    // same day
    return now >= start && now <= end;
  } else {
    // crosses midnight — add one day to end
    end.setDate(end.getDate() + 1);
    return now >= start || now <= end;
  }
};
