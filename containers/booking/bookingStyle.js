import { StyleSheet } from "react-native";
import { UI_COLORS } from "../../styles/colors";

export const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainerLeft: { width: "70%" },
  buttonContainerRight: {
    width: "30%",
    textAlign: "right",
    flexDirection: "row"
  },
  buttonContainerButton: {
    borderRadius: 10,
    borderColor: UI_COLORS.TurqoiseDark,
    borderWidth: 1,
    borderStyle: "solid",
    width: "70%",
    marginLeft: 15
  },
  buttonContainerButtonText: {
    fontFamily: "Roboto-Bold",
    color: UI_COLORS.TurqoiseDark,
    padding: 15,
    paddingTop: 5,
    paddingBottom: 5
  },
  bookedSelected: {
    height: 20,
    width: 20,
    borderRadius: 90,
    borderColor: UI_COLORS.TurqoiseDark,
    borderWidth: 1,
    borderStyle: "solid",
    marginLeft: 10
  }
});
