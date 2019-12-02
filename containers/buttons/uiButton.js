import React from "react";
import { View, Text } from "react-native";
import { styles } from "./uiButtonStyle";

const UIButton = props => {
  return (
    <View style={styles.uiButton}>
      <Text style={styles.uiButtonText}>{props.title}</Text>
    </View>
  );
};

export default UIButton;
