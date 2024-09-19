import { TouchableOpacity, Image, StyleSheet } from "react-native";

interface Prosp {
  onPress: any;
}

const style = StyleSheet.create({
  icons: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
});

export default function Reload({ onPress }: Prosp) {
  return (
    <TouchableOpacity style={style.icons} onPress={onPress}>
      <Image source={require("@/assets/images/Reload.svg")} />
    </TouchableOpacity>
  );
}
