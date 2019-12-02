import { StyleSheet } from "react-native";
import { UI_COLORS } from "../../styles/colors";

const styles = StyleSheet.create({
  flightDetailCard: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    borderColor: UI_COLORS.LightGrey,
    borderWidth: 1,
    borderStyle: "solid",
    padding: 5,
    height: 150,
    borderRadius: 20,
    shadowOffset: { width: -10, height: 10 },
    shadowColor: "#989DB0",
    shadowOpacity: 0.53,
    shadowRadius: 8,
    backgroundColor: UI_COLORS.White,
    width: 350,
    marginBottom: 10,
    marginLeft: 10
  },
  flightCardButtonContainer: {
    flex: 1,
    flexDirection: "row"
  },
  flightDetailsCardRow: {
    paddingTop: 2,
    paddingBottom: 2,
    flexDirection: "row"
  },
  flightDetailsCardRowColumn: {
    width: 150,
    paddingTop: 5,
    paddingBottom: 5
  },
  flightDetailsCardImage: {
    width: 50,
    height: 50,
    resizeMode: "stretch"
  },
  flightDetailsCardText: {
    fontSize: 12,
    fontFamily: "Roboto-Medium"
  },
  flightDetailsCardTextBold: {
    fontSize: 16,
    fontFamily: "Roboto-Bold"
  }
});

export { styles };
