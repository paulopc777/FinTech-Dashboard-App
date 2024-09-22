import { MainStyles } from "@/styles/main";
import { TouchableOpacity, Image, StyleSheet, Text } from "react-native";

interface Prosp {
  onPress: any;
}

const style = StyleSheet.create({
  icons: {
    position: "absolute",
    bottom: 10,
    right: 18,
  },
});

export default function Trash({ onPress }: Prosp) {
  return (
    <TouchableOpacity
      style={{ ...style.icons, ...MainStyles.border }}
      onPress={onPress}
    >
      <Text style={{ fontSize: 5 }}>🗑️</Text>
    </TouchableOpacity>
  );
}
