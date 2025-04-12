import { create } from "zustand";

import { Product } from "@/types/api";

type Key = keyof Product;

type State = {
  searchQuery: string;
  selectedCategory: string;
  sortBy: Key;
  order: "asc" | "desc";
};

const useParamsStore = create<State>(() => ({
  searchQuery: "",
  selectedCategory: "",
  sortBy: "title",
  order: "desc",
}));

export default useParamsStore;
