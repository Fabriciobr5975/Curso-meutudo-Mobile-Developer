import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {

  return (
    <View style={styles.container}>
      <Text>Hello Fabrício</Text>
      <TouchableOpacity onPress={() => console.log("Hello")}  >
        <Image source={require("./assets/favicon.png")} />
      </TouchableOpacity>
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
});
