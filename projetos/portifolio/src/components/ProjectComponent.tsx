import { View, Text, StyleSheet, Linking } from "react-native";

type Props = {
  linkProject: string;
  titleProject: string;
  descriptionProject: string;
};

export default function ProjectComponent(props: Props) {
  return (
    <View style={styles.container}>
      <Text
        style={styles.link}
        onPress={() => Linking.openURL(props.linkProject)}
      >
        {props.titleProject}
      </Text>
      <Text style={styles.description}>{props.descriptionProject}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: "flex-start",
    width: "100%",
    padding: 10,
    borderRadius: 10,
    boxShadow: "0px 0px 15px #64646440",
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },

  description: {
    fontSize: 14,
    textAlign: "justify",
  }
});
