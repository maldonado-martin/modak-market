import { Text } from "@react-navigation/elements";
import { TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

import { useGetAllCategories } from "@/api/queries";
import Error from "@/components/error";
import Loading from "@/components/loading";
import { BORDER_RADIUS, GAP, SCREEN_PADDING } from "@/constants/layout";

export default function Filter() {
  const query = useGetAllCategories();

  if (query.isPending) return <Loading />;

  if (query.isError) return <Error retry={query.refetch} />;

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        {query.data.map((item) => (
          <TouchableOpacity key={item.slug} style={styles.chip}>
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  root: {
    flex: 1,
    padding: SCREEN_PADDING,
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: GAP,
  },
  chip: {
    paddingVertical: GAP,
    paddingHorizontal: SCREEN_PADDING,
    borderRadius: BORDER_RADIUS,
    backgroundColor: theme.colors.card,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border,
  },
  text: {
    fontSize: 16,
  },
}));
