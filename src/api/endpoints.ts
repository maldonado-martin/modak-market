import { AllProducts, Category, Product } from "@/types/api";

import { api } from "./config";

export async function getAllProducts(): Promise<AllProducts> {
  const { data } = await api.get<AllProducts>("/products");
  return data;
}

export async function getAllCategories(): Promise<Category[]> {
  const { data } = await api.get<Category[]>("/products/categories");
  return data;
}

export async function getProductById(id: number): Promise<Product> {
  const { data } = await api.get<Product>(`/products/${id}`);
  return data;
}
