export type Id = string | number;

export interface User {
  id: Id;
  f_name: string;
  l_name: string;
  email: string;
  phone: string;
  image: string;
}

export type UpdateUser = Pick<User, "f_name" | "l_name" | "email" | "phone">;

export interface Branch {
  id: Id;
  cover_image: string;
  image: string;
  name: string;
  address: string;
}

export interface DeliveryTimeState {
  date: string; // store date as string (ISO format)
  time: string;
  text: string;
}

export interface Banner {
  id: Id;
  image: string;
}

export interface Cuisine {
  id: Id;
  name: string;
  image: string;
}

export interface Category {
  id: Id;
  name: string;
  image: string;
  banner_image: string;
  childes: {
    id: Id;
    name: string;
    image: string;
    banner_image: string;
  }[];
}

export type ProductCategory = "all" | { id: Id; name: string; image: string };

export interface ProductVariationItem {
  label: string;
  optionPrice: string;
}

export interface ProductVariation {
  name: string;
  type: string;
  min: number;
  max: number;
  required: "on" | "off";
  values: ProductVariationItem[];
}

export interface ProductAddOnItem {
  id: number;
  name: string;
  price: number;
  tax: number;
}

export interface Product {
  id: string;
  image: string;
  name: string;
  description: string;
  product_type: string;
  price: number;
  discount_type: string;
  discount: number;
  variations: ProductVariation[];
  add_ons: ProductAddOnItem[];

  rating: {
    average: string;
    product_id: 25;
  }[];

  branch_product: {
    stock_type: "fixed" | "unlimited";
    stock: number;
    sold_quantity: number;
  };

  available_time_starts: string;
  available_time_ends: string;
}

export type ProductType = "all" | "veg" | "non_veg";

export interface SelectedAddOnItem {
  id: Id;
  quantity: number;
}

interface BaseCartItem {
  quantity: number;
  price: number;
  discounted_price: number;
  tax_amount: number;
  variant: [];
  variations: [];
}

export interface LocalCartItem extends BaseCartItem {
  id: string; // <-- new UUID or unique key per entr
  selectedAddOns: SelectedAddOnItem[];
  productId: Id;
  product: Product;
}

export interface OrderCartItem extends BaseCartItem {
  product_id: Id;
  add_on_ids: Id[];
  add_on_qtys: number[];
}

export interface Address {
  id: Id;
  contact_person_name: string;
  contact_person_number: string;
  address: string;
  road: string;
  house: string;
  floor: string;
  address_type: string;
  is_default: 0 | 1;
}

export interface Coupon {
  id: Id;
  title: string;
  code: string;
  expire_date: string; // ISO date string
  min_purchase: number;
  max_discount: number;
  discount: number;
  discount_type: "percent" | "amount";
  limit: number;
}

export interface CreateOrderPayload {
  cart: OrderCartItem[];
  coupon_discount_amount: number;
  coupon_discount_title: string;
  order_amount: number;
  order_type: "delivery" | "takeaway";
  delivery_address_id: number;
  payment_method: "cash_on_delivery" | "online";
  order_note: string;
  coupon_code: string;
  delivery_time: string;
  delivery_date: string;
  branch_id: number;
  distance: number;
  selected_delivery_area: number | null;
  is_partial: "0" | "1";
  is_cutlery_required: "0" | "1";
}

export type OrderFilterType = "ongoing" | "history";

export type OrderStatusType =
  | "pending"
  | "confirmed"
  | "processing"
  | "out_for_delivery"
  | "delivered"
  | "canceled"
  | "returned"
  | "failed";

export interface OrderItemType {
  id: Id;
  delivery_date: string;
  price: number;
  quantity: number;
  product_details: Product;
}

export interface Order {
  id: Id;
  product_images: string[];
  total_quantity: string;
  order_status: OrderStatusType;
  is_cutlery_required: 0 | 1;
  branch: Branch;
  delivery_address: Address;
  delivery_date: string;
  order_note: string;
  details: OrderItemType[];

  order_amount: number;
  total_tax_amount: number;
  coupon_discount_amount: number;
  delivery_charge: number;
}
