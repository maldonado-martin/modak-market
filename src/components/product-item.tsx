import { Text } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import { View } from "react-native";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native-unistyles";

import {
  BORDER_RADIUS,
  GAP,
  SCREEN_PADDING,
  THUMBNAIL_SIZE,
} from "@/constants/layout";
import { Product } from "@/types/api";

import Icon from "./icon";

type Props = Product;

export default function ProductItem(props: Props) {
  const { id, title, price, thumbnail } = props;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate("Detail", { id })}
    >
      <Image
        source={{ uri: thumbnail }}
        style={{ height: THUMBNAIL_SIZE, width: THUMBNAIL_SIZE }}
      />
      <View style={styles.info}>
        <Text numberOfLines={1}>{title}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
      <Icon name="chevron-right" />
    </TouchableOpacity>
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
