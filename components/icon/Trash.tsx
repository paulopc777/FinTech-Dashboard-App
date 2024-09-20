import { MainStyles } from "@/styles/main";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

interface Prosp {
  onPress: any;
}

const style = StyleSheet.create({
  icons: {
    position: "absolute",
    bottom: 10,
    right: 30,
  },
});

export default function Trash({ onPress }: Prosp) {
  return (
    <TouchableOpacity
      style={{ ...style.icons, ...MainStyles.border, padding: 2 }}
      onPress={onPress}
    >
      <Image source={require("@/assets/images/Trash.svg")} />
    </TouchableOpacity>
  );
}
