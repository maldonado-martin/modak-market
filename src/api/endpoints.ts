import {
  AllProducts,
  Category,
  Product,
  ProductKey,
  SortOrder,
} from "@/types/api";

import { api } from "./config";

export async function getAllProducts(
  skip: number,
  sortBy?: ProductKey,
  order?: SortOrder,
): Promise<AllProducts> {
  const params = new URLSearchParams({
    skip: skip.toString(),
  });

  if (sortBy) {
    params.append("sortBy", sortBy);
  }

  if (order) {
    params.append("order", order);
  }

  const { data } = await api.get<AllProducts>(`/products?${params.toString()}`);
  return data;
}

export async function getAllProductsByCategory(
  category: string,
  skip: number,
  sortBy?: ProductKey,
  order?: SortOrder,
): Promise<AllProducts> {
  const params = new URLSearchParams({
    skip: skip.toString(),
  });

  if (sortBy) {
    params.append("sortBy", sortBy);
  }

  if (order) {
    params.append("order", order);
  }

  const { data } = await api.get<AllProducts>(
    `/products/category/${category}?${params.toString()}`,
  );
  return data;
}

export async function getAllProductsBySearch(
  search: string,
  skip: number,
  sortBy?: ProductKey,
  order?: SortOrder,
): Promise<AllProducts> {
  const params = new URLSearchParams({
    skip: skip.toString(),
    q: search,
  });

  if (sortBy) {
    params.append("sortBy", sortBy);
  }

  if (order) {
    params.append("order", order);
  }

  const { data } = await api.get<AllProducts>(
    `/products/search?${params.toString()}`,
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
