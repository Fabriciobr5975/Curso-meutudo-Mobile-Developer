import { View, Image, Text, StyleSheet } from "react-native";

import imagem from "../../assets/images/imagem-perfil.jpg";

type Props = {
  titleScreen?: string;
};

export default function ProfileComponent(props: Props) {
  return (
    <View style={styles.container}>
      <Image style={styles.profileImage} source={imagem} />
      <Text style={styles.name}>{props.titleScreen}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 25,
  },
});
