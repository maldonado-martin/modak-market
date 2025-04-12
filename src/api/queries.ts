import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

import { getAllCategories, getAllProducts, getProductById } from "./endpoints";

export function useGetAllProducts() {
  return useInfiniteQuery({
    queryKey: ["products"],
    queryFn: ({ pageParam }) => getAllProducts(pageParam),
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
    queryKey: ["products", id],
    queryFn: () => getProductById(id),
  });
}
