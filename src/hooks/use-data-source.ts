import {
  useGetAllProducts,
  useGetAllProductsByCategory,
  useGetAllProductsBySearch,
} from "@/api/queries";
import useParamsStore from "@/store/params";

export default function useDataSource() {
  const { searchQuery, selectedCategory } = useParamsStore();
  const all = useGetAllProducts();
  const category = useGetAllProductsByCategory(selectedCategory);
  const search = useGetAllProductsBySearch(searchQuery);

  if (searchQuery) {
    return search;
  }

  if (selectedCategory) {
    return category;
  }

  return all;
}
