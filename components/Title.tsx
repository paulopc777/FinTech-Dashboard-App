import { Color } from "@/constants/Color";
import { MainStyles } from "@/styles/main";
import { FormatStringThoBRL } from "@/view/utils/Callculators";
import { Text, View } from "react-native";

interface Props {
  name: string;
  price: string;
  percent: string;
  fontSizeName?: number;
  fontSizePrice?: number;
}

export default function Title({
  name,
  price,
  fontSizeName,
  fontSizePrice,
  percent,
}: Props) {
  const style =
    parseFloat(percent) < 0 ? MainStyles.Text_red : MainStyles.Text_green;
  return (
    <View style={{ ...MainStyles.container_item, ...MainStyles.Shadown }}>
      <Text
        style={{
          ...MainStyles.Text_primary,

          fontSize: fontSizeName ? fontSizeName : 20,
        }}
      >
        {name}{" "}
      </Text>
      <View style={{ ...MainStyles.flex }}>
        <Text
          style={{
            ...MainStyles.Text_primary,
            ...MainStyles.Text_green,
            fontSize: fontSizePrice ? fontSizePrice : 40,
          }}
        >
          {FormatStringThoBRL(price)}
        </Text>
        <Text style={{ ...style, marginTop: 7 }}>
          {percent
            ? parseFloat(percent) > 0
              ? `+${percent}`
              : `${percent}`
            : "-"}
        </Text>
      </View>
    </View>
  );
}
