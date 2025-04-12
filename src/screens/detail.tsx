import { Text } from "@react-navigation/elements";
import { StaticScreenProps } from "@react-navigation/native";
import Color from "color";
import { Image } from "expo-image";
import { ScrollView, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

import { useGetProductById } from "@/api/queries";
import { GAP, SCREEN_PADDING } from "@/constants/layout";

type Props = StaticScreenProps<{
  id: number;
}>;

export default function Detail(props: Props) {
  const { id } = props.route.params;
  const query = useGetProductById(id);

  if (query.isPending || query.isError) return null;
  const { title, brand, description, images, stock, price } = query.data;

  return (
    <ScrollView style={styles.root} contentContainerStyle={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.brand}>{brand}</Text>
      <Image
        source={{ uri: images[0] }}
        style={styles.image}
        contentFit="contain"
      />
      <View style={styles.row}>
        <Text style={styles.price}>${price}</Text>
        <Text style={styles.stock}>{stock.toString()} units</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create((theme) => ({
  root: {
    backgroundColor: theme.colors.card,
  },
  container: {
    padding: SCREEN_PADDING,
    gap: SCREEN_PADDING,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: theme.colors.border,
  },
  title: {
    fontSize: 40,
  },
  brand: {
    fontSize: 18,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: GAP,
  },
  price: {
    fontSize: 48,
  },
  stock: {
    fontSize: 16,
    borderRadius: 1000,
    backgroundColor: Color(theme.colors.primary).alpha(0.1).toString(),
    color: theme.colors.primary,
    paddingVertical: GAP,
    paddingHorizontal: SCREEN_PADDING,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
}));
