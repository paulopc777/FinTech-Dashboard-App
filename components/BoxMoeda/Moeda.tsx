import { useEffect, useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { MainStyles } from "@/styles/main";
import { getValorCotacao } from "../../services/GetCotacao";
import { Color } from "@/constants/Color";
import Reload from "../icon/Reload";
import Trash from "../icon/Trash";
import { Toast } from "toastify-react-native";
import { Redirect, useRouter } from "expo-router";

interface Prop {
  title: string;
  value: string;
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
  const [IsConverte, setIsConverte] = useState(false);
  const router = useRouter();

  async function dataGet() {
    getValorCotacao({ Code: Code })
      .then((res) => {
        if (!res) {
          handleDelete(Code);
          Toast.error(`codigo do ativo invalido`, "top");
        }

        const key = Object.keys(res).find((k) => k.startsWith(Code));

        if (key) {
          const exchangeData = res[key];

          setData({
            title: `${exchangeData.code} - ${exchangeData.codein}`,
            value: parseFloat(exchangeData.ask).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            }),
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
      })
      .catch((err) => {
        console.log(err);
      });
    return;
  }

  const handleUpdate = () => {
    dataGet();
  };

  useEffect(() => {
    dataGet();
  }, [Code]);

  return (
    <>
      {!!data ? (
        <TouchableOpacity
          style={{ ...MainStyles.container_item, ...MainStyles.Shadown }}
          onPress={() => {
            router.replace(`/${Code}`);
          }}
        >
          <View style={{ ...MainStyles.flex, justifyContent: "space-between" }}>
            <Text style={MainStyles.Text_title}>{data.title}</Text>
            {data.varBid > 0 ? (
              <Text
                style={{
                  ...MainStyles.Text_green,
                }}
              >
                +{data.varBid}%
              </Text>
            ) : (
              <Text
                style={{
                  ...MainStyles.Text_red,
                }}
              >
                {data.varBid}%
              </Text>
            )}
          </View>

          <Text style={{ ...MainStyles.Text_primary, fontSize: 30 }}>
            {data.value}
          </Text>

          <Trash
            onPress={() => {
              handleDelete(Code);
            }}
          />
        </TouchableOpacity>
      ) : (
        <View style={{ ...MainStyles.container_item, ...MainStyles.Shadown }}>
          <Text style={MainStyles.Text_primary}>Carregando ...</Text>
          <Trash
            onPress={() => {
              handleDelete(Code);
            }}
          />
          <Reload onPress={handleUpdate} />
          <ActivityIndicator color={Color.green} />
        </View>
      )}
    </>
  );
}
