import { Button, Text } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import Color from "color";
import { TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

import { useGetAllCategories } from "@/api/queries";
import Error from "@/components/error";
import Loading from "@/components/loading";
import { BORDER_RADIUS, GAP, SCREEN_PADDING } from "@/constants/layout";
import useParamsStore from "@/store/params";

export default function Filter() {
  const query = useGetAllCategories();
  const { selectedCategory } = useParamsStore();
  const navigation = useNavigation();

  if (query.isPending) return <Loading />;

  if (query.isError) return <Error retry={query.refetch} />;

  const handleSelect = (slug: string) => {
    if (selectedCategory === slug) {
      useParamsStore.setState({ selectedCategory: "" });
    } else {
      useParamsStore.setState({ selectedCategory: slug });
    }
  };

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        {query.data.map((item) => {
          const isSelected = selectedCategory === item.slug;
          return (
            <TouchableOpacity
              key={item.slug}
              style={[styles.chip(isSelected)]}
              onPress={() => handleSelect(item.slug)}
            >
              <Text style={styles.text(isSelected)}>{item.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <Button onPress={() => navigation.goBack()}>Done</Button>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  root: {
    flex: 1,
    padding: SCREEN_PADDING,
    gap: SCREEN_PADDING,
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: GAP,
  },
  chip: (isSelected: boolean) => ({
    paddingVertical: GAP,
    paddingHorizontal: SCREEN_PADDING,
    borderRadius: BORDER_RADIUS,
    backgroundColor: isSelected
      ? Color(theme.colors.primary).alpha(0.1).toString()
      : theme.colors.card,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border,
  }),
  text: (isSelected: boolean) => ({
    fontSize: 16,
    color: isSelected ? theme.colors.primary : theme.colors.text,
  }),
}));
