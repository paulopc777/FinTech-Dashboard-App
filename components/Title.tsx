import { MainStyles } from "@/styles/main";
import { FormatStringThoBRL } from "@/view/utils/Callculators";
import { Text, View } from "react-native";

interface Props {
  name: string;
  price: string;
}

export default function Title({ name, price }: Props) {
  return (
    <View style={{ ...MainStyles.container_item, ...MainStyles.Shadown }}>
      <Text style={MainStyles.Text_primary}>{name} </Text>
      <Text style={MainStyles.Text_primary}>{FormatStringThoBRL(price)} </Text>
    </View>
  );
}
