import styles from "./styles";

import React from "react";
import { Text, TextInput, View } from "react-native";

interface TextInputPersonalizadoProps {
  name: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  multiline?: boolean;
  numberOfLines?: number;
}

export default function TextInputPersonalizado(
  props: TextInputPersonalizadoProps
) {
  return (
    <View style={styles.compTextInputPersonalizado}>
      <Text>{props?.name ?? "Campo"}</Text>
      <TextInput
        style={props?.multiline ? styles.inputArea : styles.input}
        placeholder={props?.placeholder ?? "Digite sua mensagem"}
        value={props?.value}
        onChangeText={props?.onChangeText}
        multiline={props?.multiline ?? false}
        numberOfLines={props?.numberOfLines ?? 1}
        keyboardType="default"
      />
    </View>
  );
}
