export type Id = string | number;

export interface User {
  id: Id;
  f_name: string;
  l_name: string;
  email: string;
  phone: string;
  image: string;
}

export interface Branch {
  id: Id;
  cover_image: string;
  image: string;
  name: string;
  address: string;
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

export interface Combo {
  id: Id;
  name: string;
  price: number;
  image: string;
  isVeg: boolean;
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

export interface ComboCollection {
  id: Id;
  name: string;
  products: Product[];
}

export type ModalId = string;

export interface Coupon {
  id: Id;
  code: string;
  description: string;
}
