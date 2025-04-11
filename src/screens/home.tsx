import { Text } from "@react-navigation/elements";
import { Image } from "expo-image";
import { FlatList, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

import { useGetAllProducts } from "@/api/queries";
import Icon from "@/components/icon";
import {
  BORDER_RADIUS,
  GAP,
  SCREEN_PADDING,
  THUMBNAIL_SIZE,
} from "@/constants/layout";

export default function Home() {
  const query = useGetAllProducts();

  return (
    <FlatList
      contentContainerStyle={styles.root}
      data={query.data?.products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Image
            source={{ uri: item.thumbnail }}
            style={{ height: THUMBNAIL_SIZE, width: THUMBNAIL_SIZE }}
          />
          <View style={styles.info}>
            <Text numberOfLines={1}>{item.title}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </View>
          <Icon name="chevron-right" />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create((theme) => ({
  root: {
    padding: SCREEN_PADDING,
    gap: SCREEN_PADDING,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: SCREEN_PADDING,
    gap: SCREEN_PADDING,
    borderRadius: BORDER_RADIUS,
    backgroundColor: theme.colors.card,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border,
  },
  info: {
    flex: 1,
    gap: GAP,
  },
  price: {
    fontWeight: "bold",
    fontSize: 18,
  },
}));
