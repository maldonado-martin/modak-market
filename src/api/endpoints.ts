import { AllProducts } from "@/types/api";

import { api } from "./config";

export async function getAllProducts(): Promise<AllProducts> {
  const { data } = await api.get<AllProducts>("/products");
  return data;
}
