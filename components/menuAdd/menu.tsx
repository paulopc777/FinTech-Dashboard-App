import {
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  View,
} from "react-native";
import InputText from "../Input/InputText";
import ButtonPersonal from "../Buttons/Button";
import { Color } from "@/constants/Color";
import { MainStyles } from "@/styles/main";
import { useState } from "react";
import { Calculator, Plus } from "lucide-react-native";
import { useRouter } from "expo-router";

interface MenuPros {
  setData: any;
}

interface PressProps {
  e?: NativeSyntheticEvent<TextInputKeyPressEventData>;
}

export default function Menu({ setData }: MenuPros) {
  const [value, setValue] = useState("");
  const router = useRouter();

  function handlePressAdd() {
    if (value.length > 0)
      setData((d: any) =>
        d ? [...d, value.toLocaleUpperCase()] : [value.toLocaleUpperCase()]
      );
    setValue("");
  }

  return (
    <View
      style={{
        ...MainStyles.double_container,
        width: `${100}%`,
      }}
    >
      <InputText
        placeholder="Adicionar Ativo"
        value={value}
        onChange={setValue}
        handlePressEnter={handlePressAdd} // Corrigido aqui
      />
      <ButtonPersonal
        title={<Calculator color={"#ffff"} />}
        onPress={() => {
          router.replace(`/call`);
        }}
        style={{ transform: [{ translateY: 2 }] }}
      />
      <ButtonPersonal
        title={<Plus color={"#ffff"} />}
        onPress={handlePressAdd}
        style={{ transform: [{ translateY: 2 }] }}
      />
    </View>
  );
}
