import { Text, View } from "react-native";
import { FormateDate } from "./Utils/DateConverte";
import { useEffect, useState } from "react";
import { getValorCotacao } from "@/services/getCotacao";
import { MainStyles } from "@/styles/main";
import Reload from "../icon/Reload";
import Trash from "../icon/Trash";
import { removeItem } from "@/Store/store";
import Change from "../icon/Cambio";
import ChangeOption from "./ChageOption/ChangeOption";

interface Prop {
  title: string;
  high: string;
  low: string;
  timestamp: string;
  varBid: number;
}

export interface PropMoeda {
  Code: string;
  handleDelete: (Code: string) => void;
}

export default function Moeda({ Code, handleDelete }: PropMoeda) {
  const [data, setData] = useState<Prop>();
  const [IsConverted, setIsConverted] = useState(false);
  
  async function dataGet() {
    getValorCotacao({ Code: Code }).then((res) => {
      const key = Object.keys(res).find((k) => k.startsWith(Code));
      if (key) {
        const exchangeData = res[key];
        setData({
          title: exchangeData.name,
          high: parseFloat(exchangeData.high).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          }),
          low: parseFloat(exchangeData.low).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          }),
          timestamp: exchangeData.create_date,
          varBid: parseFloat(parseFloat(exchangeData.pctChange).toFixed(2)),
        });
      }
    });
  }

  const handleUpdate = () => {
    dataGet();
  };

  useEffect(() => {
    dataGet();
  }, [Code]);

  return (
    <>
      {data ? (
        <View style={MainStyles.container_item}>
          <Text style={MainStyles.Text_title}>{data.title}</Text>
          <View style={MainStyles.hr} />
          {IsConverted ? (
            <ChangeOption value={data.high} />
          ) : (
            <View style={{ ...MainStyles.flex, position: "relative" }}>
              <Text style={MainStyles.Text_primary}>Maxima {data.high}</Text>
              <Text style={MainStyles.Text_primary}>Minimas {data.low}</Text>
              {data.varBid > 0 ? (
                <Text
                  style={{
                    ...MainStyles.Text_green,
                    position: "absolute",
                    right: 10,
                    top: 10,
                  }}
                >
                  +{data.varBid}
                </Text>
              ) : (
                <Text
                  style={{
                    ...MainStyles.Text_red,
                    position: "absolute",
                    right: 10,
                    top: 10,
                  }}
                >
                  {data.varBid}
                </Text>
              )}
            </View>
          )}

          <Text style={MainStyles.Text_second}>
            {FormateDate(data.timestamp)}
          </Text>
          <Reload onPress={handleUpdate} />
          <Trash
            onPress={() => {
              handleDelete(Code);
            }}
          />
          <Change onPress={() => { setIsConverted(!IsConverted) }} />
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </>
  );
}
