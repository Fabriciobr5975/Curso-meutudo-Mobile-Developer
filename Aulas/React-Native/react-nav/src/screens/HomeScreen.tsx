import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App({ navigation }: any) {
  
  function navToGallery() {
    navigation.navigate("gallery");
  }

  return (
    <View style={styles.container}>
      <Text>Home.tsx</Text>
      <Button title="Go to Gallery" onPress={navToGallery}></Button>
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
});
