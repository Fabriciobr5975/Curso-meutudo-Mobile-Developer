import { View, Text, StyleSheet, Linking } from "react-native";

type Props = {
  typeContact: string;
  linkContact: string;
};

export default function ContactComponent(props: Props) {
  return (
    <View style={styles.container}>
      <Text
        style={styles.contact}
        onPress={() => Linking.openURL(props.linkContact)}
      >
        {props.typeContact}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: "flex-start",
    width: "100%",
  },
  contact: {
    alignSelf: "center",
    width: "80%",
    fontSize: 20,
    fontWeight: "bold",
    borderWidth: 1,
    padding: 12.5,
    textAlign: "center",
    borderRadius: 10,
    color: "#fff",
    backgroundColor: "#0088ffd0",
  },
});
