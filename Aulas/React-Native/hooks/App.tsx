import { useRef, useReducer } from "react";
import { StatusBar } from "expo-status-bar";
import { View, TextInput, Button } from "react-native";

const ActionsTypes = {
  RESET: "RESET",
  WRITE: "WRITE",
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case ActionsTypes.RESET:
      state.textInputRef.current.focus();
      state.textInputRef.current.setNativeProps({ text: "" });
      return state;

    case ActionsTypes.WRITE:
      state.textInputRef.current.setNativeProps({ text: "Fabrício" });
      return state;
  }
};

export default function App() {
  const initialState = { textInputRef: useRef<TextInput>(null) };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <View>
      <TextInput
        ref={state.textInputRef}
        style={{
          height: 40,
          borderBlockColor: "gray",
          borderWidth: 1,
          marginBottom: 20,
          marginTop: 50,
          paddingTop: 10,
          paddingHorizontal: 10,
        }}
      ></TextInput>
      <Button
        title="Resetar"
        onPress={() => dispatch({ type: ActionsTypes.RESET })}
      />
      <Button
        title="Escrever"
        onPress={() => dispatch({ type: ActionsTypes.WRITE })}
      />
      <StatusBar style="auto" />
    </View>
  );
}
