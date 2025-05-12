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
  rating: string;
  price: number;
  discount_type: string;
  discount: number;
  variations: ProductVariation[];
  add_ons: ProductAddOnItem[];
}

export interface SelectedAddOnItem {
  id: Id;
  quantity: number;
}

interface BaseCartItem {
  productId: Id;
  quantity: number;
  price: number;
  discounted_price: number;
  tax_amount: number;
  variation: [];
}

export interface LocalCartItem extends BaseCartItem {
  id: string; // <-- new UUID or unique key per entr
  selectedAddOns: SelectedAddOnItem[];
  product: Product;
}

export interface OrderCartItem extends BaseCartItem {
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
