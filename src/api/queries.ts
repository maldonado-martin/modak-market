import { useQuery } from "@tanstack/react-query";

import { getAllProducts } from "./endpoints";

export function useGetAllProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });
}
