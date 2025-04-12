import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Detail from "@/screens/detail";
import Home from "@/screens/home";

export default createNativeStackNavigator({
  screens: {
    Home: {
      screen: Home,
    },
    Detail: {
      screen: Detail,
      options: {
        headerTitle: "",
      },
    },
  },
  screenOptions: {
    headerShadowVisible: false,
    headerBackButtonDisplayMode: "minimal",
    headerBackButtonMenuEnabled: false,
    headerTitleAlign: "center",
  },
});
