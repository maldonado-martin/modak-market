import { Text } from "@react-navigation/elements";
import Color from "color";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

import { useGetAllCategories } from "@/api/queries";
import Error from "@/components/error";
import Icon from "@/components/icon";
import Loading from "@/components/loading";
import { BORDER_RADIUS, GAP, SCREEN_PADDING } from "@/constants/layout";
import useParamsStore from "@/store/params";
import { ProductKey } from "@/types/api";

const SORT_BY = [
  {
    label: "Title",
    value: "title",
  },
  {
    label: "Price",
    value: "price",
  },
  {
    label: "Rating",
    value: "rating",
  },
  {
    label: "Stock",
    value: "stock",
  },
] as const;

export default function Filter() {
  const query = useGetAllCategories();
  const { selectedCategory, sortBy, order } = useParamsStore();

  if (query.isPending) return <Loading />;

  if (query.isError) return <Error retry={query.refetch} />;

  const handleSelect = (slug: string) => {
    if (selectedCategory === slug) {
      useParamsStore.setState({ selectedCategory: "" });
    } else {
      useParamsStore.setState({ selectedCategory: slug });
    }
  };

  const handleSort = (key: ProductKey) => {
    if (sortBy === key) {
      if (order === "desc") {
        useParamsStore.setState({
          sortBy: undefined,
          order: undefined,
        });
      } else {
        useParamsStore.setState({
          order: "desc",
        });
      }
    } else {
      useParamsStore.setState({
        sortBy: key,
        order: "asc",
      });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.root}>
      <View style={styles.section}>
        <Text style={styles.title}>Sort by</Text>
        <View style={styles.container}>
          {SORT_BY.map((item) => (
            <TouchableOpacity
              key={item.value}
              style={styles.chip(sortBy === item.value)}
              onPress={() => handleSort(item.value)}
            >
              <Text style={styles.text(sortBy === item.value)}>
                {item.label}
              </Text>
              {sortBy === item.value && (
                <Icon
                  uniProps={(theme) => ({ color: theme.colors.primary })}
                  name={order === "asc" ? "arrow-upward" : "arrow-downward"}
                  size={16}
                />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Categories</Text>
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
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create((theme) => ({
  root: {
    flex: 1,
    padding: SCREEN_PADDING,
    gap: SCREEN_PADDING * 2,
  },
  section: {
    gap: GAP,
  },
  title: {
    fontSize: 24,
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: GAP,
  },
  chip: (isSelected: boolean) => ({
    flexDirection: "row",
    alignItems: "center",
    gap: GAP,
    paddingVertical: GAP,
    paddingHorizontal: SCREEN_PADDING,
    borderRadius: BORDER_RADIUS,
    backgroundColor: isSelected
      ? Color(theme.colors.primary).alpha(0.1).toString()
      : theme.colors.card,
  }),
  text: (isSelected: boolean) => ({
    fontSize: 16,
    color: isSelected ? theme.colors.primary : theme.colors.text,
  }),
}));
