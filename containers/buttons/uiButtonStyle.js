import { StyleSheet } from "react-native";
import { UI_COLORS } from "../../styles/colors";

const styles = StyleSheet.create({
  // Button Styling
  uiButton: {
    justifyContent: "center",
    backgroundColor: UI_COLORS.TurqoiseOpacity,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: UI_COLORS.TurqoiseOpacity,
    borderRadius: 90,
    height: 30,
    marginRight: 4
  },
  uiButtonText: {
    paddingLeft: 15,
    paddingRight: 15,
    fontFamily: "Roboto-Medium",
    textAlign: "center",
    fontSize: 12,
    color: UI_COLORS.TurqoiseDark
  }
});

export { styles };
