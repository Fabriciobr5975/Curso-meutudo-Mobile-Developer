import { View, Text, StyleSheet } from "react-native";

type Props = {
  skillName: string;
  skillLevel: SkillLevel;
};

export enum SkillLevel {
  basico = "Básico",
  intermediario = "Intermediário",
  avancado = "Avançado",
}

function getColorOfSkill(level: SkillLevel) {
  switch (level) {
    case SkillLevel.avancado:
      return "#19FE1D";
    case SkillLevel.intermediario:
      return "#FE7119";
    default:
      return "#646464";
  }
}

export default function SkillComponent(props: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>{props.skillName}</Text>
      <Text
        style={{
          color: getColorOfSkill(props.skillLevel),
        }}
      >
        {props.skillLevel}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 10,
    borderRadius: 10,
    boxShadow: "0px 0px 15px #64646440",
  },

  description: {
    fontSize: 14,
    textAlign: "justify",
  },
});
