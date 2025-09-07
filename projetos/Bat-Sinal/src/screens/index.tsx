import styles from "./styles";

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  Image,
  View
} from "react-native";

import image from "../../assets/images/bat-logo.png";
import TextInputPersonalizado from "../components/TextInputPersonalizado";

interface InformacoesModel {
  nome: string;
  telefone: string;
  localizacao: string;
  observacao?: string;
}

export default function App() {
  const [habilitarFormulario, setHabilitarFormulario] = useState(false);
  const [informacoes, setInformacoes] = useState<InformacoesModel>({
    nome: "",
    telefone: "",
    localizacao: "",
    observacao: "",
  });

  return (
    
      <View style={styles.container}>
        {!habilitarFormulario && (
          <View style={styles.homepage}>
            <Image style={styles.image} source={image} />
            <Button
              title="Activate bat signal"
              color={"#454545"}
              onPress={() => setHabilitarFormulario((prev) => !prev)}
            />
          </View>
        )}

        {habilitarFormulario && (
          <View style={styles.form}>
            <Image style={{ width: 75, height: 25 }} source={image} />

            <TextInputPersonalizado
              name="Nome"
              placeholder="Digite seu nome"
              value={informacoes.nome}
              onChangeText={(text: string) =>
                setInformacoes((prev) => ({ ...prev, nome: text }))
              }
              multiline={false}
            />
            <TextInputPersonalizado
              name="Telefone"
              placeholder="Digite seu telefone"
              value={informacoes.telefone}
              onChangeText={(text: string) =>
                setInformacoes((prev) => ({ ...prev, telefone: text }))
              }
              multiline={false}
            />
            <TextInputPersonalizado
              name="Localização"
              placeholder="Digite sua localização"
              value={informacoes.localizacao}
              onChangeText={(text: string) =>
                setInformacoes((prev) => ({ ...prev, localizacao: text }))
              }
              multiline={true}
              numberOfLines={4}
            />
            <TextInputPersonalizado
              name="Observação"
              placeholder="Digite uma observação (opcional)"
              value={informacoes.observacao ?? ""}
              onChangeText={(text: string) =>
                setInformacoes((prev) => ({ ...prev, observacao: text }))
              }
              multiline={true}
              numberOfLines={4}
            />

            <Button
              title="Enviar"
              onPress={() => setHabilitarFormulario(false)}
            />
          </View>
        )}
        <StatusBar style="auto" />
      </View>
  );
}
