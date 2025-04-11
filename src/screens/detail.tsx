import { Text } from "@react-navigation/elements";
import { StaticScreenProps } from "@react-navigation/native";
import { View } from "react-native";

type Props = StaticScreenProps<{
  id: number;
}>;

export default function Detail(props: Props) {
  const { id } = props.route.params;
  return (
    <View>
      <Text>Detail {id}</Text>
    </View>
  );
}
