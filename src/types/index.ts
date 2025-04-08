export type Id = string | number;

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

export interface Category {
  id: Id;
  name: string;
  image: string;
  banner_image: string;
}

export interface Restaurant {
  id: Id;
  name: string;
  tagline: string;
  category: string;
  iconImageUrl: string;
  imageUrl: string;
  mobileImageUrl: string;
  link: string;
}

export interface FreeDish {
  id: Id;
  image: string;
  alt: string;
  text: string;
}

export interface Cuisine {
  id: Id;
  title: string;
  image: string;
}

export interface Collection {
  id: Id;
  title: string;
  image: string;
}

export interface Combo {
  id: Id;
  name: string;
  price: number;
  image: string;
  isVeg: boolean;
}

export type ProductCategory = "all" | { id: Id; name: string; image: string };

export interface Product {
  id: string;
  name: string;
  image: string;
  isVeg: boolean;
  description: string;
  rating: string;
  price: {
    current: string;
    original: string;
  };
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

export interface NutritionItem {
  name: string;
  value: number;
  unit: string;
}
