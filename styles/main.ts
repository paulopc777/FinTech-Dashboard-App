import { Color } from "@/constants/Color";
import { StyleSheet } from "react-native";

const w_full = `${100}%`;

export const MainStyles = StyleSheet.create({
  background: {
    height: `${100}%`,
    width: `${100}%`,
    backgroundColor: Color.background,
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    width: w_full,
  },
  double_container: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  container_item: {
    backgroundColor: Color.container,
    borderRadius: 5,
    borderColor: Color.border,
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    maxWidth: 220,
    position: "relative",
  },
  Text_title: {
    color: Color.text_primary,
    fontSize: 15,
    fontWeight: 600,
  },
  Text_primary: {
    color: Color.text_primary,
  },
  Text_second: {
    color: Color.text_second,
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
  },
  hr: {
    width: w_full,
    height: 2,
    marginTop: 3,
    marginBottom: 3,
    color: Color.background,
    backgroundColor: Color.background_container,
    borderColor: Color.background,
  },
  
});