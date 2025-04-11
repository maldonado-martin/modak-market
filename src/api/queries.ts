import { useQuery } from "@tanstack/react-query";

import { getAllCategories, getAllProducts } from "./endpoints";

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
