import { useQuery } from "@tanstack/react-query";

import { getAllCategories, getAllProducts, getProductById } from "./endpoints";

export function useGetAllProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
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
