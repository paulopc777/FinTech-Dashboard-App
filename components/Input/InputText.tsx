import { Color } from "@/constants/Color";
import React, { Dispatch, SetStateAction } from "react";

import { MainStyles } from "@/styles/main";
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputChangeEventData,
  TextInputKeyPressEventData,
} from "react-native";

const style = StyleSheet.create({
  input: {
    backgroundColor: Color.container,
    borderRadius: 10,
    color: Color.text_primary,
    padding: 5,
    width: `${80}%`,
  },
});

interface InputProps {
  value: string;
  onChange: (text: string) => void; //
  placeholder: string;
  handlePressEnter: () => void; // Corrigido o tipo da função
}

export default function InputText({
  onChange,
  value,
  placeholder,
  handlePressEnter,
}: InputProps) {
  return (
    <TextInput
      value={value}
      onChangeText={onChange}
      style={{
        ...style.input,
        ...MainStyles.Text_second,
        ...MainStyles.Shadown,
      }}
      placeholder={placeholder}
      inputMode="text"
      placeholderTextColor={Color.text_second}
      onSubmitEditing={handlePressEnter} // Dispara o submit ao pressionar Enter
    />
  );
}
