import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerContainer: {
    height: 80,
    flexDirection: "row",
    paddingLeft: 30
  },
  cardHeroTextContainer1: { backgroundColor: "#F0F3F8" },
  cardHeroTextContainer2: { backgroundColor: "#FFFFFF" },
  cardContainer: {
    justifyContent: "space-between",
    flexDirection: "column",
    height: 500,
    paddingTop: 10,
    paddingBottom: 20
  },
  cardHeroTextContainer: {
    paddingBottom: 5,
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#EDEFF5",
    borderTopLeftRadius: 40,
    borderBottomColor: "transparent",
    backgroundColor: "#F8FAFE",
    paddingTop: 10,
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  cardHeroTextContainerTextSmall: {
    fontFamily: "Roboto-Bold",
    fontSize: 14
  },
  cardHeroTextContainerTextLarge: {
    fontFamily: "Roboto-Bold",
    fontSize: 16
  },
  cardHeroTextColorActive: {
    color: "#000000"
  },
  cardHeroTextColorInactive: {
    color: "#989DB0"
  }
});

export { styles };
