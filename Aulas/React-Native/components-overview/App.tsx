import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  TextInput,
  Button,
  ScrollView,
  Switch,
} from "react-native";

function CaixaRed() {
  return (
    <View
      style={{
        height: 100,
        width: 100,
        backgroundColor: "red",
      }}
    ></View>
  );
}

function CaixaBlue() {
  return (
    <View
      style={{
        height: 100,
        width: 100,
        backgroundColor: "blue",
      }}
    ></View>
  );
}

export default function App() {
  const [usuario, setUsuario] = useState<string>("");
  const [ligado, setLigado] = useState<boolean>(false);

  function handleSwitch() {
    setLigado(!ligado);
  }

  return (
    <View style={styles.container}>
      <CaixaRed />
      <CaixaBlue />
      <StatusBar style="auto" />
    </View>

    /** 
    <ScrollView style={[styles.container, { backgroundColor: "red" }]}>
      <View
        onTouchStart={(event) => Alert.alert("Toque iniciado")}
        onTouchEnd={(event) => Alert.alert("Toque finalizado")}
      >
        <Text style={[styles.texto, styles.border]}>OLÁ</Text>
      </View>

      <Switch value={ligado} onValueChange={handleSwitch}></Switch>

      <Image
        source={require("./assets/favicon.png")}
        style={{ display: ligado ? "flex" : "none" }}
      />

      <TextInput
        style={styles.input}
        value={usuario}
        onChange={(event) => setUsuario(event.nativeEvent.text)}
        keyboardType="default"
        placeholder="Digite seu número"
      />

      <Button
        title="Click aqui"
        onPress={() => Alert.alert("Valor atual", usuario)}
      />

      <Text>
        <Text>Hello</Text>
        <Text>World</Text>
      </Text>

      <View>
        <Text>Hello</Text>
        <Text>World</Text>
      </View>

      <Text selectable={false} onPress={() => Alert.alert("Fechou piloto!")}>
        Open up App.tsx to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </ScrollView>
    */
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
  },

  border: {
    borderColor: "red",
    borderWidth: 3,
  },

  texto: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "blue",
    color: "white",
    padding: 20,
  },
});
