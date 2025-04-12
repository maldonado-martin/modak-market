import { useCallback } from "react";
import { FlatList, ListRenderItem } from "react-native";
import { StyleSheet } from "react-native-unistyles";

import { SCREEN_PADDING } from "@/constants/layout";
import { Product } from "@/types/api";

import ProductItem from "./product-item";

type Props = {
  data: Product[];
};

export default function ProductList(props: Props) {
  const { data } = props;

  const renderItem: ListRenderItem<Product> = useCallback(
    ({ item }) => <ProductItem {...item} />,
    [],
  );

  return (
    <FlatList
      contentContainerStyle={styles.root}
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create((theme) => ({
  root: {
    padding: SCREEN_PADDING,
    gap: SCREEN_PADDING,
    backgroundColor: theme.colors.background,
  },
}));
