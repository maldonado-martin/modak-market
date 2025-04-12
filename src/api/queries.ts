import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

import { ProductKey, SortOrder } from "@/types/api";

import {
  getAllCategories,
  getAllProducts,
  getAllProductsByCategory,
  getAllProductsBySearch,
  getProductById,
} from "./endpoints";

export function useGetAllProducts(sortBy?: ProductKey, order?: SortOrder) {
  return useInfiniteQuery({
    queryKey: ["products", { sortBy, order }],
    queryFn: ({ pageParam }) => getAllProducts(pageParam, sortBy, order),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.skip === lastPage.total) return null;
      return lastPage.skip + lastPage.limit;
    },
  });
}

export function useGetAllProductsByCategory(
  category: string,
  sortBy?: ProductKey,
  order?: SortOrder,
) {
  return useInfiniteQuery({
    queryKey: ["products", { category, sortBy, order }],
    queryFn: ({ pageParam }) =>
      getAllProductsByCategory(category, pageParam, sortBy, order),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.skip === lastPage.total) return null;
      return lastPage.skip + lastPage.limit;
    },
  });
}

export function useGetAllProductsBySearch(
  search: string,
  sortBy?: ProductKey,
  order?: SortOrder,
) {
  return useInfiniteQuery({
    queryKey: ["products", { search, sortBy, order }],
    queryFn: ({ pageParam }) =>
      getAllProductsBySearch(search, pageParam, sortBy, order),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.skip === lastPage.total) return null;
      return lastPage.skip + lastPage.limit;
    },
  });
}

export function useGetAllCategories() {
  return useQuery({
    queryKey: ["products", "categories"],
    queryFn: () => getAllCategories(),
  });
}

export function useGetProductById(id: number) {
  return useQuery({
    queryKey: ["products", { id }],
    queryFn: () => getProductById(id),
  });
}
