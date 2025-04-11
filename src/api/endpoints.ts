import { api } from "./config";

export function getAllProducts() {
  return api.get("/products");
}
