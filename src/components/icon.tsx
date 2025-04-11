import Icon from "@expo/vector-icons/MaterialIcons";
import { withUnistyles } from "react-native-unistyles";

import { ICON_SIZE } from "@/constants/layout";

export default withUnistyles(Icon, (theme) => ({
  color: theme.colors.text,
  size: ICON_SIZE,
}));
