import { Color } from "@/constants/Color";
import React, { Dispatch, SetStateAction } from "react";

import { MainStyles } from "@/styles/main";
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputChangeEventData,
} from "react-native";

const style = StyleSheet.create({
  input: {
    backgroundColor: Color.container,
    borderColor: Color.border,
    borderRadius: 3,
    borderWidth: 1,
    color: Color.text_primary,
    padding: 5,

    minWidth: 170,
  },
});

interface InputProps {
  value: string;
  onChange: any;
  placeholder: string;
}

export default function InputText({
  onChange,
  value,
  placeholder,
}: InputProps) {
  return (
    <TextInput
      value={value}
      onChangeText={onChange}
      style={{ ...style.input, ...MainStyles.Text_second }}
      placeholder={placeholder}
      inputMode="text"
      placeholderTextColor={Color.text_second}
    />
  );
}
