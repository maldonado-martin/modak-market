import { ActivityIndicator } from "react-native";
import { withUnistyles } from "react-native-unistyles";

export default withUnistyles(ActivityIndicator, (theme) => ({
  color: theme.colors.primary,
  size: "large" as const,
}));
