import { BorderRadius, Color } from "@/constants/Color";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  ButtonBase: {
    backgroundColor: Color.primary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonIcon: {
    width: 40,
    height: 40,
    borderRadius: BorderRadius.small,
  },
});
