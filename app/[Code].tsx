import { getAllDataCotacao } from "@/services/GetCotacao";
import { MainStyles } from "@/styles/main";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Code from "../view/Code";

interface ReturnData {
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
  const [Data, setData] = useState<ReturnData[]>();

  async function get() {
    const d = await getAllDataCotacao({ Code: Code.toString() });
    const dd = d.map(({ name, high, low, pctChange }: ReturnData) => {
      return {
        name: name,
        high: high,
        low: low,
        pctChange: pctChange,
      };
    });
    setData(dd);
  }

  useEffect(() => {
    get();
  }, []);

  return (
    <View style={{ ...MainStyles.background, padding: 20 }}>
      {!!Data && (
        <View style={{ ...MainStyles.container_item, ...MainStyles.Shadown }}>
          <Text style={MainStyles.Text_primary}>{Data[0].name} </Text>
          <Text style={MainStyles.Text_primary}>{Data[0].bid} </Text>
        </View>
      )}
    </View>
  );
}
