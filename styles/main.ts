import { Color } from "@/constants/Color";
import { StyleSheet } from "react-native";

const w_full = `${100}%`;

const Font = {
  Inter_Black: "Inter_900Black",
};

export const MainStyles = StyleSheet.create({
  background: {
    height: `${100}%`,
    width: `${100}%`,
    backgroundColor: Color.background,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    width: `${100}%`,
  },
  double_container: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    justifyContent: "space-between",
    marginBottom: 15,
  },
  border: {
    borderColor: Color.border,
    borderWidth: 1,
    borderRadius: 5,
  },
  container_item: {
    backgroundColor: Color.container,
    borderRadius: 10,
    borderColor: Color.border,
    borderWidth: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 10,
    width: `${100}%`,
    position: "relative",
  },
  Text_title: {
    color: Color.text_primary,
    fontSize: 15,
    fontFamily: Font.Inter_Black,
  },
  Text_primary: {
    color: Color.text_primary,
    fontFamily: Font.Inter_Black,
  },
  Text_second: {
    color: Color.text_second,
    fontFamily: Font.Inter_Black,
  },
  Text_green: {
    color: Color.green,
    fontFamily: Font.Inter_Black,
  },
  Text_red: {
    color: "#F25270",
    fontFamily: Font.Inter_Black,
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
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Shadown: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});
