import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

import Spinner from "./spinner";

export default function Loading() {
  return (
    <View style={styles.root}>
      <Spinner />
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.card,
  },
}));
