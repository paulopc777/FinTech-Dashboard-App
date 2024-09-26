import { MainStyles } from "@/styles/main";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";

import Title from "@/components/Title";
import { Inter_900Black, useFonts } from "@expo-google-fonts/inter";
import LineProgress from "@/components/Progress/LineProgress";
import LineChartComponent from "@/components/Table/LineChart";
import { filterBid } from "@/view/utils/Callculators";
import Fontisto from "@expo/vector-icons/Fontisto";
import { Color } from "@/constants/Color";
import { getAllDataCotacao } from "@/services/GetCotacao";
import ProgressDay from "@/components/Progress/ProgressDay";
import { Undo2 } from "lucide-react-native";
import ButtonPersonal from "@/components/Buttons/Button";

export interface ReturnData {
  code: string;
  codein: string;
  name: string;
  high: string;
  low: string;
  varBid: string;
  pctChange: string;
  bid: string;
  ask: string;
  timestamp: string;
  create_date: string;
}

export default function CodePage() {
  const { Code } = useLocalSearchParams();
  const [fontLoad] = useFonts({ Inter_900Black });
  const [Data, setData] = useState<ReturnData[]>();
  const [TimeSelect, setTimeSelect] = useState("Ultimos 7 Dias");
  const router = useRouter();

  async function get(Days?: string) {
    const d = await getAllDataCotacao({ Code: Code.toString(), Days: Days });
    const dd = d.map(
      ({ name, high, low, pctChange, bid, varBid }: ReturnData) => {
        return {
          name: name,
          high: high,
          low: low,
          pctChange: pctChange,
          bid: bid,
          varBid: varBid,
        };
      }
    );
    setData(dd);
  }

  useEffect(() => {
    get();
  }, []);

  return (
    <View style={{ ...MainStyles.background, padding: 20 }}>
      <StatusBar backgroundColor="#18171F" barStyle={"light-content"} />
      {fontLoad && (
        <>
          {!!Data && (
            <>
              <Title
                name={Data[0].name}
                price={Data[0].bid}
                percent={Data[0].pctChange}
              />
              <ProgressDay TimeSelect={TimeSelect} data={Data} />

              <View style={{ ...MainStyles.container_item }}>
                <LineChartComponent
                  priceMid={parseFloat(Data[0].bid)}
                  dataValues={filterBid(Data)}
                />
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    gap: 10,
                    alignItems: "center",
                    padding: 5,
                  }}
                >
                  <ButtonPersonal
                    title={"S"}
                    onPress={() => {
                      get("7");
                      setTimeSelect("Ultimos 7 Dias");
                    }}
                  />
                  <ButtonPersonal
                    title={"Q"}
                    onPress={() => {
                      get("15");
                      setTimeSelect("Ultimos 15 Dias");
                    }}
                  />
                  <ButtonPersonal
                    title={"M"}
                    onPress={() => {
                      get("30");
                      setTimeSelect("Ultimos 30 Dias");
                    }}
                  />
                </View>
              </View>
            </>
          )}
        </>
      )}

      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 10,
          right: 10,
          backgroundColor: Color.green,
          padding: 10,
          borderRadius: 100,
        }}
        onPress={() => {
          router.replace(`/`);
        }}
      >
        <Undo2 color={"#fff"} />
      </TouchableOpacity>
    </View>
  );
}
