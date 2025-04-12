import { create } from "zustand";

import { ProductKey, SortOrder } from "@/types/api";

type State = {
  searchQuery: string;
  selectedCategory: string;
  sortBy?: ProductKey;
  order?: SortOrder;
};

const useParamsStore = create<State>(() => ({
  searchQuery: "",
  selectedCategory: "",
  sortBy: undefined,
  order: undefined,
}));

export default useParamsStore;
