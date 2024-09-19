import { Text, View } from "react-native";
import { FormateDate } from "./Utils/DateConverte";
import { useEffect, useState } from "react";
import { getValorCotacao } from "@/services/getCotacao";
import { MainStyles } from "@/styles/main";
import Reload from "../icon/Reload";
import Trash from "../icon/Trash";
import { removeItem } from "@/Store/store";

interface Prop {
  title: string;
  high: string;
  low: string;
  timestamp: string;
}

export interface PropMoeda {
  Code: string;
  handleDelete: (Code: string) => void;
}

export default function Moeda({ Code, handleDelete }: PropMoeda) {
  const [data, setData] = useState<Prop>();

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
          <View style={MainStyles.flex}>
            <Text style={MainStyles.Text_primary}>Maxima {data.high}</Text>
            <Text style={MainStyles.Text_primary}>Minimas {data.low}</Text>
          </View>
          <Text style={MainStyles.Text_second}>
            {FormateDate(data.timestamp)}
          </Text>
          <Reload onPress={handleUpdate} />
          <Trash
            onPress={() => {
              handleDelete(Code);
            }}
          />
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </>
  );
}
