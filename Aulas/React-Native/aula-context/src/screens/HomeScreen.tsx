import { useState, useContext } from "react";
import { View, Text, TextInput, Button } from "react-native";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";

import { UserContext } from "../contexts/UserContext";

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const [inputText, setInputText] = useState<string>("");
  const userContext = useContext(UserContext);

  const navigateToUserScreen = () => {
    userContext?.save(inputText);
    navigation.navigate("User", { username: inputText });
  };

  return (
    <View>
      <Text>Nome:</Text>
      <TextInput
        placeholder="Digite seu nome..."
        value={inputText}
        onChangeText={(text) => setInputText(text)}
      />
      <Button title="Logar" onPress={navigateToUserScreen} />
    </View>
  );
}
