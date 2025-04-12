import { TextInput, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

import { GAP, SCREEN_PADDING } from "@/constants/layout";
import useParamsStore from "@/store/params";

import Icon from "./icon";

export default function Search() {
  const { searchQuery } = useParamsStore();

  const setSearchQuery = (value: string) => {
    useParamsStore.setState({ searchQuery: value });
  };

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Icon name="search" />
        <TextInput
          style={styles.input}
          placeholder="Search products"
          placeholderTextColor="#666"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery && (
          <TouchableOpacity onPress={() => setSearchQuery("")}>
            <Icon name="close" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  root: {
    backgroundColor: theme.colors.card,
  },
  container: {
    backgroundColor: theme.colors.background,
    flexDirection: "row",
    margin: SCREEN_PADDING,
    gap: GAP,
    height: 48,
    alignItems: "center",
    borderRadius: 24,
    paddingHorizontal: SCREEN_PADDING,
  },
  input: {
    flex: 1,
    height: "100%",
    color: theme.colors.text,
    fontSize: 16,
  },
}));
