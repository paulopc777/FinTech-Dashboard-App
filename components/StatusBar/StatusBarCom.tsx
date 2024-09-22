import { Color } from "@/constants/Color";
import { StatusBar } from "react-native";

export default function StatusBarCom() {
  return (
    <StatusBar
      barStyle="default"
      backgroundColor={Color.background}
      translucent
      hidden
    />
  );
}
