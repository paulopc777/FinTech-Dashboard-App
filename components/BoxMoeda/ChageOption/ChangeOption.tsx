import ButtonPersonal from "@/components/Buttons/Button";
import InputText from "@/components/Input/InputText";
import { Color } from "@/constants/Color";
import { MainStyles } from "@/styles/main";
import { useState } from "react";
import { View, Button, Text } from "react-native";
import { ConverterMoedaParaFloat } from "../Utils/DolConvert";

interface Props {
  value: string;
}

export default function ChangeOption({ value }: Props) {
  const [Coin, setCoin] = useState("");
  const [Value, setValue] = useState("");

  const handleChangeValue = () => {
    if (Coin.length > 0) {
      console.log(value);
      const res = parseFloat(Coin) * ConverterMoedaParaFloat(value);
      console.log(res);
      const d = res.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      setValue(d);
    }
  };

  return (
    <View>
      <Text
        style={{ ...MainStyles.Text_primary, marginTop: 10, marginBottom: 10 }}
      >
        Valor atual : {value}
      </Text>
      <InputText
        placeholder="digite o valor "
        value={Coin}
        onChange={setCoin}
      />

      <View
        style={{
          ...MainStyles.flex,
          marginTop: 10,
          marginBottom: 5,
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <ButtonPersonal
          title="Cambio"
          accessibilityLabel="Cambio"
          color={Color.border}
          onPress={handleChangeValue}
        />
        <Text style={MainStyles.Text_primary}>
          {Value.length > 0 ? Value : "esperando um numero"}
        </Text>
      </View>
    </View>
  );
}
