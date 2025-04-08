import { Combo } from "@/types";

export interface ComboItem extends Combo {
  description: string;
}

export type Step = 1 | 2;

export interface SelectedItems {
  item1: ComboItem | null;
  item2: ComboItem | null;
};
