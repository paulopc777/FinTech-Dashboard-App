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
import LineChartComponent from "@/components/Table/LineChart";
import { filterBid } from "@/view/utils/Callculators";
import { Color } from "@/constants/Color";

import ProgressDay from "@/components/Progress/ProgressDay";
import { ArrowBigRightDashIcon, Undo2 } from "lucide-react-native";
import ButtonPersonal from "@/components/Buttons/Button";
import ChangeOption from "@/components/ChageOption/ChangeOption";
import { calcularMediaMovel } from "@/components/Table/utils/CallMediaMovel";

import Volatilidade from "@/components/Indicadores/Volatilidade";
import { GetAllDataCotacao } from "@/services/getCotacao";
import Card from "@/components/ux/Card/Card";
import { RenderLogo } from "@/components/BoxMoeda/Moeda";

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
    <View style={{ flex: 1, padding: 20 }}>
      <StatusBar backgroundColor="#18171F" barStyle={"light-content"} />

      <Card style={{ width: "100%", height: "auto", padding: 10 }}>
        {Data && (
          <View style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <View>
              <View style={{ display: "flex", flexDirection: "row", gap: 5, alignItems: "center" }}>
                <RenderLogo code={Code.toString().slice(0, 2).toLocaleLowerCase()} name={Data[0].name.split("/")[0].toLocaleLowerCase()} />
                <Text
                  style={{ color: "#fff", fontSize: 30, fontFamily: "Inter_900Black" }}
                >
                  {Data[0].name.split("/")[0]}
                </Text>

              </View>

              <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 5 }}>
                <ArrowBigRightDashIcon size={15} />
                <Text
                  style={{ color: "#fff", fontSize: 10, fontFamily: "Inter_900Black" }}
                >
                  {Data[0].name.split("/")[1]}
                </Text>
              </View>

              <View style={{ display: "flex", flexDirection: "row", gap: 5, alignItems: "flex-start" }}>
                <Text style={{ color: "#fff", fontSize: 30, fontFamily: "Inter_900Black" }}>
                  {parseFloat(Data[0].bid).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </Text>
                <Text style={{ color: "#fff", fontSize: 10, fontFamily: "Inter_900Black" }}>
                  {parseFloat(Data[0].varBid).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </Text>
              </View>
            </View>
            <View>
              {/* Var. Diária */}
              <View>
                <View style={{ display: "flex", flexDirection: "column", gap: 5, alignItems: "center" }}>
                  <View
                    style={{

                      backgroundColor: Color.primary,
                      paddingHorizontal: 4,
                      paddingVertical: 2,
                      borderRadius: 4,
                    }}>
                    <Text style={{ color: '#fff', fontSize: 8, fontFamily: "Inter_900Black" }}>
                      {parseFloat(Data[0].high).toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </Text>
                  </View>

                  <View
                    style={{

                      backgroundColor: Color.primary,
                      paddingHorizontal: 4,
                      paddingVertical: 2,
                      borderRadius: 4,
                    }}>
                    <Text style={{ color: '#fff', fontSize: 8, fontFamily: "Inter_900Black" }}>
                      {parseFloat(Data[0].low).toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}
      </Card>

      <View style={{ width: "100%", height: 350, marginVertical: 10 }}>
        {Data && (
          <LineChartComponent
            dataValues={Data.map((item) => parseFloat(item.bid))}
          />
        )}
      </View>
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 10,
          right: 10,
          backgroundColor: Color.primary,
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
