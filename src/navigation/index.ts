import { createStaticNavigation } from "@react-navigation/native";
import { withUnistyles } from "react-native-unistyles";

import Root from "./root";

export default withUnistyles(createStaticNavigation(Root), (theme) => ({
  theme,
}));
