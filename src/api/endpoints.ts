import { AllProducts, Category, Product } from "@/types/api";

import { api } from "./config";

export async function getAllProducts(skip: number): Promise<AllProducts> {
  const { data } = await api.get<AllProducts>(`/products?skip=${skip}`);
  return data;
}

export async function getAllProductsByCategory(
  category: string,
  skip: number,
): Promise<AllProducts> {
  const { data } = await api.get<AllProducts>(
    `/products/category/${category}?skip=${skip}`,
  );
  return data;
}

export async function getAllProductsBySearch(
  search: string,
  skip: number,
): Promise<AllProducts> {
  const { data } = await api.get<AllProducts>(
    `/products/search?q=${search}&skip=${skip}`,
  );
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
