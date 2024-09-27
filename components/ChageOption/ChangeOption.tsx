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
      const res = parseFloat(Coin) * parseFloat(value);
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
        Valor atual : {FormatStringThoBRL(value)}
      </Text>
      <InputText
        placeholder="digite o valor "
        value={Coin}
        onChange={setCoin}
        handlePressEnter={handleChangeValue}

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
          title={<Replace color={"#fff"} />}
          onPress={handleChangeValue}
        />

        <Text style={MainStyles.Text_primary}>
          {Value.length > 0 ? Value : "esperando um numero"}
        </Text>
      </View>
    </View>
  );
}
