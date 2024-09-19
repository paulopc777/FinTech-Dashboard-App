import { Color } from "@/constants/Color";
import React, { Dispatch, SetStateAction } from "react";
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
  },
});

interface InputProps {
  value: string;
  onChange: any;
}

export default function InputText({ onChange, value }: InputProps) {
  return (
    <TextInput
      value={value}
      onChangeText={onChange}
      style={style.input}
      placeholder="codigo da moeda"
    />
  );
}
