import { Button, Text } from "@react-navigation/elements";
import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

import { SCREEN_PADDING } from "@/constants/layout";

type Props = {
  retry: () => void;
};

export default function Error(props: Props) {
  const { retry } = props;

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Oops,</Text>
      <Text style={styles.description}>
        Something went wrong. Please try again later.
      </Text>
      <Button onPress={retry}>Retry</Button>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  root: {
    flex: 1,
    padding: SCREEN_PADDING * 2,
    gap: SCREEN_PADDING,
    backgroundColor: theme.colors.card,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
  },
}));
