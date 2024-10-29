import ButtonPersonal, { ButtonStyle } from "@/components/Buttons/Button";
import { Color } from "@/constants/Color";
import { MainStyles } from "@/styles/main";
import { useState } from "react";
import { View, Button, Text, TouchableOpacity } from "react-native";
import { ConverterMoedaParaFloat } from "../BoxMoeda/Utils/DolConvert";
import InputText from "@/components/Input/InputText";
import { FormatStringThoBRL } from "@/view/utils/Callculators";
import { Replace } from "lucide-react-native";
import { transform } from "@babel/core";

interface Props {
  value: string;
}

export default function ChangeOption({ value }: Props) {
  const [Coin, setCoin] = useState("");
  const [Value, setValue] = useState("");

  const handleChangeValue = () => {
    if (Number.isNaN(parseFloat(Coin))) {
      setValue("Coloque um numero valido");
      return;
    }
    if (Coin.length > 0) {
      const values = Coin.replace(",",".")
      const res = parseFloat(values) * parseFloat(value);
      const d = res.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      setValue(d);
    }
  };

  return (
    <View>
      <Text style={{ ...MainStyles.Text_primary, marginTop: 10, fontSize: 20 }}>
        Cambio de Moedas
      </Text>
      <Text
        style={{ ...MainStyles.Text_primary, marginTop: 10, marginBottom: 10 }}
      >
        Valor atual : {FormatStringThoBRL(value)}
      </Text>

      <View
        style={{
          ...MainStyles.flex,
          marginTop: 10,
          marginBottom: 5,
          alignItems: "center",
          justifyContent: "flex-start",
          gap: 40,
        }}
      >
        <InputText
          placeholder="digite o valor"
          value={Coin}
          onChange={setCoin}
          handlePressEnter={handleChangeValue}
          styleText={{ height: 40, width: `${60}%` }}
        />
        <ButtonPersonal
          title={<Replace color={"#fff"} />}
          onPress={handleChangeValue}
        />
      </View>
      <Text style={{ ...MainStyles.Text_primary, marginTop: 10, fontSize: 20 }}>
        {Value.length > 0 ? Value : "esperando um numero"}
      </Text>
    </View>
  );
}
