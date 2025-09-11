import Styles from "./styles";

import { StatusBar } from "expo-status-bar";
import { ScrollView, View, Text, FlatList } from "react-native";
import ProfileComponent from "../components/ProfileComponent";

import {SkillLevel} from "../components/SkillComponent";

import SkillComponent from "../components/SkillComponent";

export default function SkillScreen() {
  return (
    <ScrollView style={Styles.container}>
      <View>
        <ProfileComponent titleScreen="Fabrício de Araújo Santana" />
      </View>
      <View style={Styles.informationArea}>
        <SkillComponent skillName="Java" skillLevel={SkillLevel.intermediario} />
          <SkillComponent skillName="JavaScript" skillLevel={SkillLevel.intermediario} />
        <SkillComponent skillName="TypeScript" skillLevel={SkillLevel.intermediario} />
        <SkillComponent skillName="HTML" skillLevel={SkillLevel.intermediario} />
        <SkillComponent skillName="CSS" skillLevel={SkillLevel.basico} />
        <SkillComponent skillName="MySQL" skillLevel={SkillLevel.intermediario} />
        <SkillComponent skillName="React" skillLevel={SkillLevel.intermediario} />
        <SkillComponent skillName="React Native" skillLevel={SkillLevel.intermediario} />
        <SkillComponent skillName="Spring Boot" skillLevel={SkillLevel.basico} />
        <SkillComponent skillName="Node.js" skillLevel={SkillLevel.intermediario} />
        <SkillComponent skillName="AWS" skillLevel={SkillLevel.basico} />
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}
