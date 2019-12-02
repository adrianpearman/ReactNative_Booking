import { StyleSheet } from "react-native";
import { UI_COLORS } from "../../styles/colors";

const styles = StyleSheet.create({
  // Hotel Details
  hotelDetailCard: {
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
  hotelImageContainer: {
    width: "100%",
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 20,
    height: 150
  },
  hotelImageText: {
    color: UI_COLORS.White,
    textAlign: "left",
    marginTop: 125,
    paddingLeft: 10,
    fontFamily: "Roboto-Bold"
  },
  hotelNamePrimaryText: {
    fontSize: 16,
    fontFamily: "Roboto-Bold",
    paddingBottom: 10
  },
  hotelNameSecondaryText: {
    fontSize: 14,
    fontFamily: "Roboto-Medium",
    color: UI_COLORS.DarkGrey
  },
  hotelNameDescriptionLeft: {
    textAlign: "left",
    fontSize: 12,
    fontFamily: "Roboto-Medium",
    width: "50%",
    color: UI_COLORS.DarkGrey
  },
  hotelNameDescriptionRight: {
    textAlign: "right",
    fontSize: 12,
    fontFamily: "Roboto-Medium",
    width: "50%",
    color: UI_COLORS.DarkGrey
  },
  hotelNameDescriptionRightBold: {
    fontSize: 16,
    fontFamily: "Roboto-Bold",
    color: UI_COLORS.Black
  },
  hotelCardButtonContainer: {
    flex: 1,
    flexDirection: "row"
  }
});

export { styles };
