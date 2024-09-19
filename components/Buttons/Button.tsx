import { Color } from "@/constants/Color";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native";

type ColorButton = string;

interface ButtonProp {
  title: string;
  color: string;
  accessibilityLabel: string;
  onPress?: () => void;
}

export default function ButtonPersonal({
  accessibilityLabel,
  color,
  onPress,
  title,
}: ButtonProp) {
  return (
    <Button
      title={title}
      color={color}
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
    />
  );
}
