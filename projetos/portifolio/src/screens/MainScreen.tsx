import Styles from "./styles";

import { StatusBar } from "expo-status-bar";
import { View, ScrollView } from "react-native";
import ProfileComponent from "../components/ProfileComponent";
import ContactComponent from "../components/ContactComponent";

export default function MainScreen() {
  return (
    <ScrollView style={Styles.container}>
      <View>
        <ProfileComponent titleScreen="Fabrício de Araújo Santana" />
      </View>
      <View style={Styles.informationArea}>
        <ContactComponent
          typeContact="Github"
          linkContact="https://github.com/fabriciobr5975"
        />
        <ContactComponent
          typeContact="Linkedin"
          linkContact="https://www.linkedin.com/in/fabr%C3%ADcio-ara%C3%BAjo-6b9082287/"
        />
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}
