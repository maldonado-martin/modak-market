import { Text, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Modak Market</Text>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.background,
  },
  text: {
    color: theme.colors.text,
  },
}));
