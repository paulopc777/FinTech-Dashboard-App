import {
  LineChart,
  lineDataItem,
  yAxisSides,
} from "react-native-gifted-charts";

import { MainStyles } from "../../styles/main";
import { Dimensions, Text, View } from "react-native";
import { Color } from "../../constants/Color";
import { FormatStringThoBRL } from "@/view/utils/Callculators";

interface Props {
  dataValues: number[];

}

export default function LineChartComponent({
  dataValues,

}: Props) {
  const screenWidth = Dimensions.get("window").width - 125;

  const MinValue = Math.min.apply(null, dataValues);


  let ptData: lineDataItem[] = dataValues.map((d, index) => {
    return { value: parseFloat(d.toFixed(2)), date: index.toString() };
  });

  return (
    <LineChart
      overflowTop={10}
      areaChart
      curved
      data={ptData.reverse()}
      width={screenWidth}
      color={"rgb(37, 20, 173)"}
      startFillColor="rgb(37, 20, 173)"
      endFillColor="#ffff"
      noOfSections={2}
      yAxisOffset={MinValue - (MinValue * 0.001)}
      pointerConfig={{
        pointerStripColor: "lightgray",
        pointerStripWidth: 2,
        pointerColor: "lightgray",
        radius: 6,
        activatePointersOnLongPress: true,
        autoAdjustPointerLabelPosition: false,
        pointerLabelComponent: (items: any) => {
          return (
            <View
              style={{
                justifyContent: "center",

                position: "absolute",
                zIndex: 100,
              }}
            >
              <View
                style={{
                  paddingHorizontal: 14,
                  paddingVertical: 6,
                  borderRadius: 16,
                  backgroundColor: Color.primary,
                  width: 130,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: 15,
                    userSelect: "none",
                    color: Color.background_white,
                    fontFamily: "Inter_500Medium",
                    zIndex: 100,
                  }}
                >
                  {FormatStringThoBRL(items[0].value)}
                </Text>
              </View>
            </View>
          );
        },
      }}
    />
  );
}
