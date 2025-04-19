import { Color } from "@/constants/Color";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  ViewInput: {
    borderWidth: 0,
    borderColor: Color.primary,
    backgroundColor: Color.background_white,
    borderRadius: 5,
    color: Color.text_primary,
    padding: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: "100%",
    height: "100%",
    borderWidth: 0,
    borderColor: "transparent",
    // @ts-expect-error
    outlineStyle: "none",
  },
  ViewInputFocus: {
    borderColor: Color.primary,
    borderBottomColor: Color.primary,
    borderBottomWidth: 1,
  },
});
