import { MainStyles } from "@/styles/main";
import { FormatStringThoBRL } from "@/view/utils/Callculators";
import { Text, View } from "react-native";

interface Props {
  name: string;
  price: string;
  fontSizeName?: number;
  fontSizePrice?: number;
}

export default function Title({
  name,
  price,
  fontSizeName,
  fontSizePrice,
}: Props) {
  return (
    <View style={{ ...MainStyles.container_item, ...MainStyles.Shadown }}>
      <Text
        style={{
          ...MainStyles.Text_primary,
          ...MainStyles.Text_second,
          fontSize: fontSizeName ? fontSizeName : 25,
        }}
      >
        {name}{" "}
      </Text>
      <Text
        style={{
          ...MainStyles.Text_primary,
          ...MainStyles.Text_green,
          fontSize: fontSizePrice ? fontSizePrice : 20,
        }}
      >
        {FormatStringThoBRL(price)}{" "}
      </Text>
    </View>
  );
}
