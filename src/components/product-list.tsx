import { FlatList } from "react-native";
import { StyleSheet } from "react-native-unistyles";

import { useGetAllProducts } from "@/api/queries";
import { SCREEN_PADDING } from "@/constants/layout";

import Error from "./error";
import Loading from "./loading";
import ProductItem from "./product-item";
import Spinner from "./spinner";

export default function ProductList() {
  const query = useGetAllProducts();

  if (query.isPending) return <Loading />;

  if (query.isError) return <Error retry={query.refetch} />;

  const data = query.data?.pages.flatMap((page) => page.products) ?? [];

  return (
    <FlatList
      contentContainerStyle={styles.root}
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <ProductItem {...item} />}
      onEndReached={() => {
        if (query.hasNextPage) {
          query.fetchNextPage();
        }
      }}
      ListFooterComponent={() => {
        if (!query.isFetchingNextPage) return null;
        if (!query.hasNextPage) return null;
        return <Spinner />;
      }}
    />
  );
}

const styles = StyleSheet.create({
  root: {
    padding: SCREEN_PADDING,
    gap: SCREEN_PADDING,
  },
});
