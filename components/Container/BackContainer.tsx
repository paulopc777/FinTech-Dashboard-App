import { MainStyles } from "@/styles/main";
import React, { ReactChild, ReactChildren } from "react";
import { View } from "react-native";

interface Props {
  element: React.ReactNode | React.JSX.Element;
}

export const BackContainer = ({ element }: Props) => {
  return (
    <View style={{ ...MainStyles.container_item, ...MainStyles.Shadown }}>
      {element}
    </View>
  );
};
