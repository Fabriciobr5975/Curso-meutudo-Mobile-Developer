import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  homepage: {
    flex: 1,
    justifyContent: "center",
    gap: "20%",
  },

  form: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: "20%",
    justifyContent: "space-around",
    gap: 10,
  },

  image: {
    width: 350,
    height: 150,
  },
});

export default styles;
