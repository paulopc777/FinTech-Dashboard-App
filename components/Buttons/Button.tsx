import { Color } from "@/constants/Color";
import { MainStyles } from "@/styles/main";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "react-native";

type ColorButton = string;

interface ButtonProp {
  title: string;
  onPress?: (e: any) => void;
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
    borderWidth: 1,
    width: 40,
  },
});

export default function ButtonPersonal({ onPress, title }: ButtonProp) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...MainStyles.Shadown, ...ButtonStyle.button }}
    >
      <Text
        style={{ color: Color.text_primary, transform: [{ rotate: "45deg" }] }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
