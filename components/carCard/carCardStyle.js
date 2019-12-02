import { StyleSheet } from "react-native";
import { UI_COLORS } from "../../styles/colors";

const styles = StyleSheet.create({
  carDetailCard: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    borderColor: UI_COLORS.LightGrey,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 20,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: UI_COLORS.DarkGrey,
    shadowOpacity: 0.53,
    shadowRadius: 8,
    backgroundColor: UI_COLORS.White,
    width: 350,
    marginRight: 10,
    marginTop: 15,
    height: 300
  },
  carImageContainer: {
    width: "100%",
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 20,
    height: 150
  },
  carTextContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  carNamePrimaryTextBold: {
    fontSize: 18,
    fontFamily: "Roboto-Bold",
    marginRight: 5
  },
  carNamePrimaryText: {
    fontSize: 14,
    fontFamily: "Roboto-Medium",
    color: UI_COLORS.DarkGrey,
    marginTop: 2
  },
  carNameSecondaryTextContainer: {
    paddingLeft: 15,
    paddingTop: 10,
    flexDirection: "row"
  },
  carNameSecondaryText: {
    fontFamily: "Roboto-Medium",
    fontSize: 12
  },
  carNameDescriptionLeft: {
    textAlign: "left",
    width: "50%"
  },
  carNameDescriptionRight: {
    textAlign: "right",
    fontSize: 12,
    fontFamily: "Roboto-Medium",
    width: "50%",
    color: UI_COLORS.DarkGrey,
    paddingRight: 10
  },
  carNameDescriptionRightBold: {
    fontSize: 16,
    fontFamily: "Roboto-Bold",
    color: UI_COLORS.Black
  },
  carCardButtonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly"
  }
});

export { styles };
