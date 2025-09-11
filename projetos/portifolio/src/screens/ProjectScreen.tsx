import Styles from "./styles";

import { StatusBar } from "expo-status-bar";
import { ScrollView, View, Text } from "react-native";
import ProfileComponent from "../components/ProfileComponent";
import ProjectComponent from "../components/ProjectComponent";

export default function ProjectScreen() {
  return (
    <ScrollView style={Styles.container}>
      <View>
        <ProfileComponent titleScreen="Fabrício de Araújo Santana" />
      </View>
      <View style={Styles.informationArea}>
        <ProjectComponent
          linkProject="https://viana-vinhos.netlify.app/"
          titleProject="Projeto Web - Viana Vinhos (ReactJS + NodeJS)"
          descriptionProject="Esse projeto foi parte da nota avaliativa da matéria Desenvolvimento de Sistemas Web.
           O sistema foi pensado para permitir a manipulação dos vinhos e para que os usuários possam comprar esses
           vinhos com mais facilidade"
        />

        <ProjectComponent
          linkProject="https://github.com/fabriciobr5975"
          titleProject="Projeto Web - Viana Vinhos (AngularJS + Spring Boot)"
          descriptionProject="Esse projeto foi para a matéria Projeto Integrador: Desenvolvimento de Sistemas Orientados
          a Web. O objetivo era contruir uma aplicação WEB, como já tinhamos um outra aplicação em React + Node, criamos
          com base nela esse projeto"
        />

        <ProjectComponent
          linkProject="https://github.com/Fabriciobr5975/ADO-Monk-Chat"
          titleProject="Projeto Web - Monk Chat (AngularJS + Spring Boot)"
          descriptionProject="Esse projeto foi parte da nota avaliativa da matéria Desenvolvimento de Sistemas Web.
           O sistema foi pensado para permitir a manipulação dos vinhos e para que os usuários possam comprar esses
           vinhos com mais facilidade"
        />

        <ProjectComponent
          linkProject="https://github.com/Fabriciobr5975/Projeto-Elite-Wheelz"
          titleProject="Projeto Web - Elite Wheelz (ReactJS + NodeJS)"
          descriptionProject="Esse projeto foi parte uma atividade que compõe a nota avaliativa da matéria
           Desenvolvimento de Sistemas Web. O objetivo era contruir um sistema de gerenciamento de locação
           de veículos"
        />

        <ProjectComponent
          linkProject="https://github.com/Fabriciobr5975/Projeto-Elite-Wheelz"
          titleProject="Projeto Web - Elite Wheelz (ReactJS + NodeJS)"
          descriptionProject="Esse projeto foi parte uma atividade que compõe a nota avaliativa da matéria
           Desenvolvimento de Sistemas Web. O objetivo era contruir um sistema de gerenciamento de locação
           de veículos"
        />

        <ProjectComponent
          linkProject="https://github.com/Fabriciobr5975/Semestres-TADS-Senac/tree/main/Conte%C3%BAdo%20Adicional/Projetos/estruturasdedados"
          titleProject="Sistema de Lista em Java"
          descriptionProject="Nesse projeto eu recriei algumas classes que remetam o framework Collections do Java,
          a partir dos meus conhecimentos na linguagem. Ela tem vários métodos de ordenação, busca, controle de
          inserção, ajuste automático dos elementos, entre outros métodos que as classes da Collections oferecem"
        />

        <ProjectComponent
          linkProject="https://github.com/Fabriciobr5975/Projeto-POO-Terceiro-Semestre"
          titleProject="Projeto Gerenciamento de Veículos - (Java com JFrame)"
          descriptionProject="Esse projeto foi parte uma atividade que compõe a nota avaliativa da matéria
          Programação Orientada a Objetos (POO). O objetivo era contruir um sistema de gerenciamento de
          veículos em Java usando POO com interface gráfica"
        />
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}
