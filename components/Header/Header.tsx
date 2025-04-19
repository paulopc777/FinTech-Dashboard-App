import {

  View,
} from "react-native";
import ButtonPersonal from "../Buttons/Button";
import { Color } from "@/constants/Color";
import { MainStyles } from "@/styles/main";
import { useState } from "react";
import { Calculator, Heart, Plus, Search } from "lucide-react-native";
import { useRouter } from "expo-router";
import Input from "../ux/Input/Input";
import Button from "../ux/Button/Button";

interface MenuPros {
  setData: any;
}


export default function Header({ setData }: MenuPros) {
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
        width: `100%`,
      }}
    >

      <Input
        placeholder="Adicionar Ativo"
        Icon={<Search color={Color.text_second} />}
        value={value}
        onChangeText={(e) => setValue(e)}
        onKeyPress={(e) => {
          if (e.nativeEvent.key === "Enter") {
            handlePressAdd();
          }
        }}
      />

      <View style={{ flexDirection: "row", gap: 10 }}>
        <Button
          onPress={handlePressAdd}
        >
          <Plus color={"#ffff"} />
        </Button>

        <Button>
          <Heart color={"#ffff"} />
        </Button>
      </View>

    </View>
  );
}
