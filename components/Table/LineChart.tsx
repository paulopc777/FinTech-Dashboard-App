import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { Color } from "@/constants/Color";
import { useEffect, useState } from "react";

interface Props {
  dataValues: number[];
}
const chartConfig = {
  backgroundGradientFromOpacity: 0,
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => Color.text_second,
  strokeWidth: 2, // optional, default 3
  barPercentage: 1,
};

export default function LineChartComponent({ dataValues }: Props) {
  const screenWidth = Dimensions.get("window").width - 50;

  const data = {
    labels: [],
    datasets: [
      {
        data: dataValues,
        color: (opacity = 1) => Color.green, // optional
        strokeWidth: 3, // optional
      },
    ],
  };

  return (
    <LineChart
      data={data}
      width={screenWidth}
      height={320}
      chartConfig={chartConfig}
    />
  );
}
