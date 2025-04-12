import { HeaderButton } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";

import useParamsStore from "@/store/params";

import Icon from "./icon";

export default function TuneIcon() {
  const navigation = useNavigation();
  const { selectedCategory } = useParamsStore();

  return (
    <HeaderButton onPress={() => navigation.navigate("Filter")}>
      <Icon
        name="tune"
        uniProps={(theme) => ({
          color: selectedCategory ? theme.colors.primary : theme.colors.text,
        })}
      />
    </HeaderButton>
  );
}
