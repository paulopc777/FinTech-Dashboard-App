import React from "react";
import { calculateVolatility, callRSI } from "./utils/CallVolatilidade";
import { ReturnData } from "@/app/[Code]";
// @ts-expect-error
import Thermometer from "react-thermometer-component";
import { Text, View } from "react-native";
import { MainStyles } from "../../styles/main";
import { LineChart } from "react-native-chart-kit";

const chartConfig = {
  backgroundGradientFrom: "transparent",
  backgroundGradientFromOpacity: 0,
  decimalPlaces: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 1, // optional, default 3
  barPercentage: 0.4,
  useShadowColorFromDataset: false, // optional
};

export default function Volatilidade({ Data }: { Data: ReturnData[] }) {
  const volatilidade = calculateVolatility(Data);

  const data = {
    labels: [callRSI(Data, 1).toFixed(2)],
    datasets: [
      {
        data: [
          callRSI(Data, 1) / 100,
          callRSI(Data, 1) / 100,
          callRSI(Data, 1) / 100,
          callRSI(Data, 1) / 100,
          callRSI(Data, 1) / 100,
          callRSI(Data, 1) / 100,
        ],
      },
    ],
  };

  return (
    <>
      <Text
        style={{ ...MainStyles.Text_primary, fontSize: 20, marginBottom: 10 }}
      >
        Volatilidade
      </Text>
      <View
        style={{
          ...MainStyles.flex,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Thermometer
          theme="dark"
          value={`${volatilidade}`}
          max="100"
          steps=""
          format=""
          size=""
          height="150"
        />
      </View>
    </>
  );
}
