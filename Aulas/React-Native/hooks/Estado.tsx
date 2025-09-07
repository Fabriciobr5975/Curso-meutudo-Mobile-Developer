import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert } from "react-native";

export default function Estado() {
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    console.log("A quntidade foi alterada:");
  }, [quantity]);

  const removeNumber = () => {
    setQuantity((prev) => prev - 1);
  };

  const addNumber = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <Button title="-" onPress={removeNumber} />
        <Text style={styles.textLabel}>{quantity}</Text>
        <Button title="+" onPress={addNumber} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  textLabel: {
    fontSize: 22,
  },

  buttonRow: {
    flexDirection: "row",
  },
});
