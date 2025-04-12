import { HeaderButton } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";

import Icon from "./icon";

export default function TuneIcon() {
  const navigation = useNavigation();

  return (
    <HeaderButton onPress={() => navigation.navigate("Filter")}>
      <Icon name="tune" />
    </HeaderButton>
  );
}
