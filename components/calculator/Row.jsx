import React from "react";
import { View } from "react-native";

export default function Row({ children }) {
  return <View style={{ flexDirection: "row" }}>{children}</View>;
}
