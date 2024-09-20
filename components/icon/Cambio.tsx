import { Color } from "@/constants/Color";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { MainStyles } from "../../styles/main";

interface Prosp {
  onPress: any;
}

const style = StyleSheet.create({
  icons: {
    position: "absolute",
    bottom: 10,
    right: 50,
  },
});

export default function Change({ onPress }: Prosp) {
  return (
    <TouchableOpacity
      style={{ ...style.icons, ...MainStyles.border, padding: 2 }}
      onPress={onPress}
    >
      <Image source={require("@/assets/images/Cambio.svg")} />
    </TouchableOpacity>
  );
}
