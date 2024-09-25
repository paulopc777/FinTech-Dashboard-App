import { Color } from "@/constants/Color";
import { MainStyles } from "@/styles/main";
import React from "react";
import { StyleSheet, View } from "react-native";

const style = StyleSheet.create({
  container: {
    position: "relative",
    height: 10,
    backgroundColor: Color.green,
  },
  line: {
    position: "absolute",
    height: 10,
    backgroundColor: "#08712D",
  },
});

interface Props {
  w: number;
}

export default function LineProgress({ w }: Props) {
  return (
    <View style={{ ...MainStyles.container_item, ...MainStyles.Shadown }}>
      <View style={style.container}>
        <View style={{ ...style.line, width: `${w}%` }} />
      </View>
    </View>
  );
}
