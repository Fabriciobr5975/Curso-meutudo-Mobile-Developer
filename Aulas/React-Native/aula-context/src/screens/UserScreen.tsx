import { useContext } from "react";
import { View, Text } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../App";

import { UserContext } from "../contexts/UserContext";

type UserScreenProps = {
  route: RouteProp<RootStackParamList, "User">;
};

export default function UserScreen({ route }: UserScreenProps) {
  const { username } = route.params;
  const userContext = useContext(UserContext);
  const nomeDinamico = userContext?.loginName || "Nenhum nome salvo";
  const nomeEstatico = userContext?.nome || "Nenhum nome fornecido";

  return (
    <View>
      <Text style={{ fontSize: 32 }}>Nome Da Rota: {username}</Text>
      <Text style={{ fontSize: 32 }}>Nome Estático: {nomeEstatico}</Text>
      <Text style={{ fontSize: 32 }}>Context Dinâmico: {nomeDinamico}</Text>
    </View>
  );
}
