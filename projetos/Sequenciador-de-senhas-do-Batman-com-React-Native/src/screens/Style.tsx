import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },

  logoContainer: {
    flexDirection: "column",
    borderColor: "#fff",
    borderWidth: 2,
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 60,
    padding: 20,
    paddingBottom: 15,
    backgroundColor: "#4D4D4D"
  },

  inputContainer: {
    width:'80%',
    flexDirection:'column',
    alignItems:'center',
  }
});

export default styles;
