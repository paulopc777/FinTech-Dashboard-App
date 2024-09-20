import { View } from "react-native";
import InputText from "../Input/InputText";
import ButtonPersonal from "../Buttons/Button";
import { Color } from "@/constants/Color";
import { MainStyles } from "@/styles/main";
import { useState } from "react";

interface MenuPros {
  setData: any;
}

export default function Menu({ setData }: MenuPros) {
  const [value, setValue] = useState("");

  return (
    <View>
      <View style={MainStyles.double_container}>
        <InputText
          placeholder="codigo da moeda"
          value={value}
          onChange={setValue}
        />
        <ButtonPersonal
          color={Color.container}
          accessibilityLabel="as"
          title="Add"
          onPress={() => {
            if (value.length > 0)
              setData((d: any) => (d ? [...d, value.toLocaleUpperCase()] : [value.toLocaleUpperCase()]));
              setValue("");
          }}
        />
      </View>
    </View>
  );
}
