import React from "react";
import { Image, Text } from "react-native";
import { styles } from "./BatLogoStyles";
const batLogo = require("../../../assets/bat-logo.png");

export function BatLogo() {
  return (
    <>
      <Text style={styles.title}>BAT PASS GENERATOR</Text>
      <Image
        source={batLogo}
        style={{
          resizeMode: "contain",
          height: 180,
        }}
      />
    </>
  );
}
