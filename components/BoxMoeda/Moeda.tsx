import { useEffect, useState } from "react";
import { ActivityIndicator, Image, Text, TouchableOpacity, View } from "react-native";
import { MainStyles } from "@/styles/main";

import { Color } from "@/constants/Color";
import Reload from "../icon/Reload";
import Trash from "../icon/Trash";
import { Toast } from "toastify-react-native";
import { Redirect, useRouter } from "expo-router";
import { GetValorCotacao } from "../../services/getCotacao";
import Card from "../ux/Card/Card";

interface Prop {
  title: string;
  value: string;
  high: string;
  low: string;
  timestamp: string;
  varBid: number;
  name: string
  code: string
}

export interface PropMoeda {
  Code: string;
  handleDelete: (Code: string) => void;
}

export const RenderLogo = ({ code, name }: { code: string, name: string }) => {
  const [isCrypto, setIsCrypto] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if the crypto logo exists
    fetch(`https://cdn.investing.com/crypto-logos/20x20/v2/${name}.png`)
      .then((response) => {
        setIsCrypto(response.ok);
      })
      .catch((err) => {
        console.log(err);
        setIsCrypto(false);
      });
  }, [code]);

  if (isCrypto === null) {
    return <ActivityIndicator size="small" color={Color.text_primary} />;
  }

  return (
    <>
      {isCrypto ? (
        <Image
          source={{
            uri: `https://cdn.investing.com/crypto-logos/20x20/v2/${name}.png`,
          }}
          style={{
            width: 20,
            height: 20,
          }} />
      ) : (
        <Image
          source={{
            uri: `https://flagcdn.com/w320/${code}.png`,
          }}
          style={{
            width: 20,
            height: 20,
          }} />
      )}
    </>
  );
};

export default function Moeda({ Code, handleDelete }: PropMoeda) {
  const [data, setData] = useState<Prop>();
  const [IsConverte, setIsConverte] = useState(false);
  const router = useRouter();

  async function dataGet() {
    GetValorCotacao({ Code: Code })
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
            code: exchangeData.code,
            timestamp: exchangeData.create_date,
            varBid: parseFloat(parseFloat(exchangeData.pctChange).toFixed(2)),
            name: exchangeData.name.split("/")[0],
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
        <Card
          style={{
            padding: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              router.replace(`/${Code}`);
            }}
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <View style={{ ...MainStyles.flex, justifyContent: "space-between" }}>
              <View style={{ ...MainStyles.flex, alignItems: "center", gap: 10 }}>
                <RenderLogo code={data.code.slice(0, 2).toLocaleLowerCase()} name={data.name.toLocaleLowerCase()} />
                <View>
                  <Text style={MainStyles.Text_title}>{data.name}</Text>
                  <Text style={{ color: Color.text_primary, fontSize: 10, fontFamily: "Inter_500Medium" }}>{data.title}</Text>
                </View>
              </View>


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
        </Card >
      ) : (
        <View style={{ ...MainStyles.container_item, ...MainStyles.Shadown }}>
          <Text style={MainStyles.Text_primary}>Carregando ...</Text>
          <Trash
            onPress={() => {
              handleDelete(Code);
            }}
          />
          <Reload onPress={handleUpdate} />
          <ActivityIndicator color={Color.background} />
        </View>
      )
      }
    </>
  );
}
