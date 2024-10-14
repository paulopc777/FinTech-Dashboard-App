import React from "react";
import { MainStyles } from "@/styles/main";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Title from "@/components/Title";
import { Inter_900Black, useFonts } from "@expo-google-fonts/inter";
import LineProgress from "@/components/Progress/LineProgress";
import LineChartComponent from "@/components/Table/LineChart";
import { filterBid } from "@/view/utils/Callculators";
import { Color } from "@/constants/Color";

import ProgressDay from "@/components/Progress/ProgressDay";
import { Undo2 } from "lucide-react-native";
import ButtonPersonal from "@/components/Buttons/Button";
import ChangeOption from "@/components/ChageOption/ChangeOption";
import { calcularMediaMovel } from "@/components/Table/utils/CallMediaMovel";

import Volatilidade from "@/components/Indicadores/Volatilidade";
import { GetAllDataCotacao } from "@/services/GetCotacao";

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
  const [TimeSelect, setTimeSelect] = useState(7);
  const router = useRouter();

  async function get(Days?: string) {
    const d = await GetAllDataCotacao({ Code: Code.toString(), Days: Days });
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

  const MediaMovel = useMemo(() => {
    if (Data) {
      return calcularMediaMovel(Data, TimeSelect);
    }
    return [0];
  }, [Data]);

  return (
    <View style={{ ...MainStyles.background, padding: 20 }}>
      <StatusBar backgroundColor="#18171F" barStyle={"light-content"} />
      {fontLoad && (
        <>
          {!!Data && (
            <>
              <ScrollView showsVerticalScrollIndicator={false}>
                <Title
                  name={Data[0].name}
                  price={Data[0].bid}
                  percent={Data[0].pctChange}
                />
                <ProgressDay
                  TimeSelect={`Ultimos ${TimeSelect} Dias`}
                  data={Data}
                />
                <View style={{ ...MainStyles.container_item }}>
                  <LineChartComponent
                    priceMid={parseFloat(Data[0].bid)}
                    dataValues={filterBid(Data)}
                    MediaMovel={MediaMovel}
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
                        setTimeSelect(7);
                      }}
                    />
                    <ButtonPersonal
                      title={"Q"}
                      onPress={() => {
                        get("15");
                        setTimeSelect(15);
                      }}
                    />
                    <ButtonPersonal
                      title={"M"}
                      onPress={() => {
                        get("30");
                        setTimeSelect(30);
                      }}
                    />
                  </View>
                </View>
                <View style={{ ...MainStyles.container_item }}>
                  <ChangeOption value={Data[0].bid} />
                </View>
                <View style={{ ...MainStyles.container_item }}>
                  <Volatilidade Data={Data} />
                </View>
              </ScrollView>
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
