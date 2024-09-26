import { View, Text } from "react-native";
import LineProgress from "./LineProgress";
import { MainStyles } from "@/styles/main";
import { FormatStringThoBRL } from "../../view/utils/Callculators";

interface Prop {
  data: GetParams[];
  TimeSelect: string;
}

interface GetParams {
  name: string;
  high: string;
  low: string;
  pctChange: string;
  bid: string;
  varBid: string;
}
function calcularValorNormalizado(
  ValorAtual: number,
  Min: number,
  Max: number
): number {
  if (Max === Min) {
    return 0; // Para evitar divisão por zero
  }
  return ((ValorAtual - Min) / (Max - Min)) * 100;
}
export default function ProgressDay({ data, TimeSelect }: Prop) {
  //
  const DataMax = data.map((d) => parseFloat(d.high));
  const DataMin = data.map((d) => parseFloat(d.low));
  const Max = Math.max(...DataMax);
  const Min = Math.min(...DataMin);

  const percent = calcularValorNormalizado(parseFloat(data[0].bid), Min, Max);

  return (
    <View
      style={{
        ...MainStyles.container_item,
        ...MainStyles.Shadown,
        position: "relative",
      }}
    >
      <Text style={{ ...MainStyles.Text_primary, fontSize: 15 }}>
        {TimeSelect}
      </Text>
      <View
        style={{
          ...MainStyles.flex,
          width: `${100}%`,
          paddingVertical: 10,
          justifyContent: "space-between",
        }}
      >
        <Text style={{ ...MainStyles.Text_primary }}>
          {FormatStringThoBRL(`${Min}`)}
        </Text>
        <Text style={{ ...MainStyles.Text_primary }}>
          {FormatStringThoBRL(`${Max}`)}
        </Text>
      </View>
      <LineProgress w={percent} />

      <View style={{ paddingBottom: 10 }}></View>
    </View>
  );
}
