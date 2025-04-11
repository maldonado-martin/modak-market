import type { StaticParamList } from "@react-navigation/native";

import Root from "@/navigation/root";

type RootStackParamList = StaticParamList<typeof Root>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
