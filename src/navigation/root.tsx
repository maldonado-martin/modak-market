import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TuneIcon from "@/components/tune-icon";
import Detail from "@/screens/detail";
import Filter from "@/screens/filter";
import Home from "@/screens/home";

export default createNativeStackNavigator({
  screens: {
    Home: {
      screen: Home,
      options: {
        headerRight: TuneIcon,
        title: "Modak Market",
      },
    },
    Detail: {
      screen: Detail,
      options: {
        headerTitle: "",
      },
    },
    Filter: {
      screen: Filter,
      options: {
        headerTitle: "Sort & Filter",
        presentation: "modal",
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
