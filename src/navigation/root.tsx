import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Detail from "@/screens/detail";
import Home from "@/screens/home";

export default createNativeStackNavigator({
  screens: {
    Home,
    Detail,
  },
});
