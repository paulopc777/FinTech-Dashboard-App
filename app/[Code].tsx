import { MainStyles } from "@/styles/main";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";



import Title from "@/components/Title";
import { Inter_900Black, useFonts } from "@expo-google-fonts/inter";
import LineProgress from "@/components/Progress/LineProgress";
import LineChartComponent from "@/components/Table/LineChart";
import { filterBid } from "@/view/utils/Callculators";
import Fontisto from "@expo/vector-icons/Fontisto";
import { Color } from "@/constants/Color";
import { getAllDataCotacao } from "@/services/getCotacao";

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
  const [Line, setLine] = useState(0);
  const router = useRouter();

  async function get() {
    const d = await getAllDataCotacao({ Code: Code.toString() });
    const dd = d.map(({ name, high, low, pctChange, bid }: ReturnData) => {
      return {
        name: name,
        high: high,
        low: low,
        pctChange: pctChange,
        bid: bid,
      };
    });
    setData(dd);
  }

  useEffect(() => {
    get();
  }, []);

  return (
    <View style={{ ...MainStyles.background, padding: 20 }}>
      {fontLoad && (
        <>
          {!!Data && (
            <>
              <Title name={Data[0].name} price={Data[0].bid} />
              <LineChartComponent
                priceMid={parseFloat(Data[0].bid)}
                dataValues={filterBid(Data)}
              />
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
        <Fontisto
          name="arrow-return-left"
          size={24}
          color={Color.text_primary}
        />
      </TouchableOpacity>
    </View>
  );
}
