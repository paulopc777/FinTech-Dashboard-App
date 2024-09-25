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
  priceMid: number;
}

export default function LineChartComponent({ dataValues, priceMid }: Props) {
  const screenWidth = Dimensions.get("window").width - 140;

  console.log(dataValues);
  const MaxValue = Math.max.apply(null, dataValues);
  const MinValue = Math.min.apply(null, dataValues);
  //
  let ptData: lineDataItem[] = dataValues.map((d, index) => {
    return { value: parseFloat(d.toFixed(2)), date: index.toString() };
  });

  console.log(MaxValue / 2);

  return (
    <View style={{ ...MainStyles.container_item }}>
      <LineChart
        overflowTop={10}
        areaChart
        curved
        data={ptData.reverse()}
        rotateLabel
        width={screenWidth}
        hideDataPoints
        color={Color.green}
        thickness={2}
        startFillColor="rgba(20,105,81,0.3)"
        endFillColor="rgba(20,85,81,0.01)"
        initialSpacing={0}
        noOfSections={2}
        adjustToWidth={true}
        yAxisColor="white"
        yAxisOffset={MinValue - 0.1}
        yAxisThickness={0}
        rulesColor={Color.text_second}
        yAxisTextStyle={{ color: Color.text_second }}
        xAxisColor={Color.text_second}
        pointerConfig={{
          pointerStripHeight: 160,
          pointerStripColor: "lightgray",
          pointerStripWidth: 2,
          pointerColor: "lightgray",
          radius: 6,
          pointerLabelWidth: 100,
          pointerLabelHeight: 90,
          activatePointersOnLongPress: true,
          autoAdjustPointerLabelPosition: false,
          pointerLabelComponent: (items: any) => {
            return (
              <View
                style={{
                  height: 90,
                  width: `${100}%`,
                  justifyContent: "center",
                  marginTop: -40,
                  marginLeft: -40,
                  overflow: "visible",
                  zIndex: 100,
                }}
              >
                <View
                  style={{
                    paddingHorizontal: 14,
                    paddingVertical: 6,
                    borderRadius: 16,
                    backgroundColor: "white",
                    width: "100%",
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      textAlign: "center",
                      fontSize: 15,

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
    </View>
  );
}
