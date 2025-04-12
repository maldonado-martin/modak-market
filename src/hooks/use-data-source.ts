import {
  useGetAllProducts,
  useGetAllProductsByCategory,
  useGetAllProductsBySearch,
} from "@/api/queries";
import useParamsStore from "@/store/params";

export default function useDataSource() {
  const { searchQuery, selectedCategory, sortBy, order } = useParamsStore();
  const all = useGetAllProducts(sortBy, order);
  const category = useGetAllProductsByCategory(selectedCategory, sortBy, order);
  const search = useGetAllProductsBySearch(searchQuery, sortBy, order);

  if (searchQuery) {
    return search;
  }

  if (selectedCategory) {
    return category;
  }

  return all;
}
