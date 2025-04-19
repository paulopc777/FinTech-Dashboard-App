import { BorderRadius, Color } from "@/constants/Color";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  ViewCard: {
    backgroundColor: Color.background_container,
    borderRadius: BorderRadius.small,
    color: Color.text_primary,
    padding: 5,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
});
