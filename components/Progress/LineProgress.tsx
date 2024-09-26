import { Color } from "@/constants/Color";
import { MainStyles } from "@/styles/main";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { ChevronUp } from "lucide-react-native";

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
    <View style={{ ...style.container, position: "relative" }}>
      <View style={{ ...style.line, width: `${w}%` }} />
      <View style={{ marginLeft: `${w - 2.6}%`, marginTop: 8 }}>
        <ChevronUp color={Color.green} width={20} height={20} />
      </View>
    </View>
  );
}
