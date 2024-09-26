import { Color } from "@/constants/Color";
import { MainStyles } from "@/styles/main";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "react-native";

type ColorButton = string;

interface ButtonProp {
  title: any;
  onPress?: (e: any) => void;
  style?: any;
}

const ButtonStyle = StyleSheet.create({
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.green,
    padding: 10,
    borderRadius: 10,
    borderColor: Color.border,
    width: 40,
    height: 40,
  },
});

export default function ButtonPersonal({ onPress, title, style }: ButtonProp) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...MainStyles.Shadown, ...ButtonStyle.button }}
    >
      <Text style={{ color: Color.text_primary, ...style }}>{title}</Text>
    </TouchableOpacity>
  );
}
